import React, { Component } from "react";
import TodoItems from "./todoitems";
import "../css/todolist.css";

class todoList extends Component {
  state = {
    items: []
  };

  addItem = item => {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";
    item.preventDefault();
  };

  deleteItem = key => {
    let filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  };

  render() {
    return (
      <div className="todoListMain">
        <h1>what to do...</h1>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter a thing"
            ></input>
            <button type="submit">okay</button>
          </form>

          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default todoList;
