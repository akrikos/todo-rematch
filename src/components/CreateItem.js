import * as React from "react";
import * as ReactRedux from "react-redux";
import * as Models from "../state_management/models.js"

class CreateItem extends React.Component {
  constructor() {
    super();
    this.state = { itemText: "" };
    this.createItem = this.createItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ itemText: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createItem}>
          <input
            className="hxTextCtrl"
            type="text"
            name="todo-item"
            value={this.state.itemText}
            onChange={this.handleChange}
          />
          <button className="hxBtn hxPrimary">Create</button>
        </form>
      </div>
    );
  }

  createItem(event) {
    this.props.addItem(new Models.TodoItem(this.state.itemText));
    this.setState({ itemText: '' });
    event.preventDefault();
  }
}

const createMapStateToProps = () => {
  return {};
};

const createMapDispatchToProps = dispatch => ({
  addItem: dispatch.todoItems.addItem
});

const ConnectedCreateItem = ReactRedux.connect(
  createMapStateToProps,
  createMapDispatchToProps
)(CreateItem);

export {
  CreateItem,
  ConnectedCreateItem
};