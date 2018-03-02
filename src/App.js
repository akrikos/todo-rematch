import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect, Provider } from "react-redux";
import * as Store from "./state_management/store.js";
import * as ItemList from "./components/ItemList.js";
import * as CreateItem from "./components/CreateItem.js";

class App extends Component {
  render() {
    return (
      <Provider store={Store.store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TODONE APP.</h1>
          </header>
          <ItemList.ConnectedItemList />
          <CreateItem.ConnectedCreateItem />
        </div>
      </Provider>
    );
  }
}

export default App;
