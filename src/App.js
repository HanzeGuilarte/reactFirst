import React, { Component } from "react";
import uuid from "uuid/dist/v4";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoList from "./Component/TodoList.js";
import TodoInput from "./Component/TodoInput.js";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake Up" },
      { id: 2, title: "Dont Let Me" },
      { id: 3, title: "Good Morning" },
    ],
    item: "",
    editItem: false,
    id: uuid(),
  };

  handleChange = (result) => {
    console.log();
  };

  handleChanges = (result) => {
    console.log();
  };


  handleSubmit = (result) => {
    console.log();
  };

  handleDelete = (id) => {
    console.log();
  };

  handlerEdit = () => {
    console.log();
  };
  clearList = () => {
    console.log();
  };

  render() {
    console.log(this.state.id);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input </h3>
              <div>
                <TodoInput items={this.state.item} editItem={this.state.editItem}  handleChange={this.handleChange} hadleSubmit={this.handleSubmit} />
              </div>
              <div>
                <TodoList item={this.state.items}  clearList={this.clearList} handlerDelete={this.handleDelete} handlerEdit={this.handlerEdit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
