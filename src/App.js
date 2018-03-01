import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect, Provider } from "react-redux";
import * as Models from "./state_management/models.js"

class App extends Component {
  render() {
    return (
      <Provider store={Models.store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TODONE APP.</h1>
          </header>
          <ConnectedItemList />
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




export default App;
