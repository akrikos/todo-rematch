import React from "react";
import ReactDOM from "react-dom";
import * as CreateItem from "./CreateItem";
import { shallow } from "enzyme";

let testItem;
const testAddItem = (item) => {
  testItem = item;
};

it("renders create item form structure as expected", () => {
  expect(<CreateItem.CreateItem addItem={function() {}} />).toMatchSnapshot();
});

it("adds an item on submission of the form", () => {
  
});
