import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";

class Filter extends Component {
  state = {
    catergories: [
      { name: "ALL" },
      { name: "Soups" },
      { name: "Salads" },
      { name: "Wraps" },
      { name: "Entrees" },
    ],
  };
  render() {
    return (
      <div className="filter-layout">
        <div className="filter-item">FILTER</div>
        {/* <div className="filter-item">ALL</div> */}
        {this.renderCategories()}
      </div>
    );
  }

  renderCategories(params) {
    return (
      <ul className="no-bullet list-group">
        {this.state.catergories.map((item) => (
          <li
            key={item.name}
            onClick={() => this.itemOnClick()}
            className="filter-item"
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
  itemOnClick() {
    alert("hello, word!");
    console.warn("item is clicked");
  }
}

export default Filter;
