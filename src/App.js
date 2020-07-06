import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  addTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTodo],
    });
  };

  toggleTodo = (todoId) => {
    this.setState({
      todo: this.state.todo.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to Your To Do App!</h2>
        <TodoList toggleTodo={this.toggleTodo} todo={this.state.todo} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
