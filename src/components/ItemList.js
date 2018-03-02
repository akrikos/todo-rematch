import * as React from "react";
import * as ReactRedux from "react-redux";

class ItemList extends React.Component {
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

const ConnectedItemList = ReactRedux.connect(mapStateToProps)(ItemList);

export {
  ItemList,
  ConnectedItemList
}
