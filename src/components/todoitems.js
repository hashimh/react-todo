import React, { Component } from "react";
import FlipMove from "react-flip-move";

class todoItems extends Component {
  createTasks = item => {
    return (
      <li onClick={() => this.deleteItem(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  };

  deleteItem = key => {
    this.props.deleteItem(key);
  };

  render() {
    // get the state from todolist component, as a prop, and map each of these to run the above function, which creates a list element for each of these items, displaying the text, storing the key.
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    // below we print the results of all iterations of the createTasks() function, by putting the list of <li> created into a <ul>.
    return (
      <ul className="theList">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

// Export
export default todoItems;
