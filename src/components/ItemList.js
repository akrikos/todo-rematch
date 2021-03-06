import * as React from "react";
import * as ReactRedux from "react-redux";

class ItemList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <table className="hxTable hxHoverable">
          <thead>
            <tr>
              <th className="hxControl">
                <hx-checkbox />
              </th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>{this.listItems()}</tbody>
        </table>
      </div>
    );
  }

  listItems() {
    if (!this.props.listItems || this.props.listItems.length === 0) {
      return (<tr><td colSpan="2">No todo items</td></tr>);
    }
    return this.props.listItems.reduce((itemList, item, index) => {
      console.log(itemList, item, index);
      itemList.push(
        <tr key={index}>
          <td className="hxControl">
            <hx-checkbox />
          </td>
          <td>{item.text}</td>
        </tr>
      );
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

export { ItemList, ConnectedItemList };
