// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChanges = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ todo: "" });
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.handleSubmit}>Add To Do</button>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
