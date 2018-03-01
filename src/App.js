import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect, Provider } from "react-redux";
import * as Models from "./state_management/models.js";

class App extends Component {
  render() {
    return (
      <Provider store={Models.store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TODONE APP.</h1>
          </header>
          <ConnectedItemList />
          <ConnectedCreateItem />
        </div>
      </Provider>
    );
  }
}

class ItemList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div className="list-header">Todo Items</div>
        {this.listItems()}
      </div>
    );
  }

  listItems() {
    if (!this.props.listItems) {
      return "No todo items";
    }
    return this.props.listItems.reduce((itemList, item, index) => {
      console.log(itemList, item, index);
      itemList.push(<div key={index}>{item.text}</div>);
      return itemList;
    }, []);
  }
}

const mapStateToProps = state => ({
  listItems: state.todoItems
});

// const mapDispatchToProps = (dispatch) => ({
//   addItem: dispatch.todoItems.addItem
// })

const ConnectedItemList = connect(mapStateToProps)(ItemList);

class CreateItem extends Component {
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
            type="text"
            name="todo-item"
            value={this.state.itemText}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }

  createItem(event) {
    this.props.addItem(new TodoItem(this.state.itemText));
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

const ConnectedCreateItem = connect(
  createMapStateToProps,
  createMapDispatchToProps
)(CreateItem);

class TodoItem {
  constructor(text) {
    this.text = text;
    this.completed = false;
  }
}

export default App;
