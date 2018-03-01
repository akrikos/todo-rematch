import { init } from "@rematch/core";

const todoItems = {
  state: [],
  reducers: {
    addItem: (state, payload) => {
      let newState = state.slice();
      newState.push(payload);
      return newState;
    }
    // completeItem: (state, payload) => state + payload.completed
  }
};

const store = init({
  models: { todoItems }
});

export { store };
