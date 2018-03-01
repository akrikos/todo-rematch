import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    let items = [{text:'finish app', finished: false}];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TODONE APP.</h1>
        </header>
        <ItemList listItems={ items } />
      </div>
    );
  }
}

class ItemList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div className="list-header">Todo Items</div>
        { this.listItems() }
      </div>
    );
  }

  listItems() {
    if (!this.props.listItems) {
      return 'No todo items';
    }
    return this.props.listItems.reduce(
      (itemList, item, index) => {
        console.log(itemList, item, index)
        itemList.push(
          <div key={ index }>{ item.text }</div>
        );
        return itemList;
      },
      []
    );
  }
}

export default App;
