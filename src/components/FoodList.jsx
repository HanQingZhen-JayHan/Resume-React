import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from "../components/FoodCard";
import SortDropdown from "./SortDropdown";

class FoodList extends Component {
  state = {
    foodList: [
      {
        name: "Chicken Vegetable Soup",
        ingredient: "Freee range chicken with no antibiotics, potatoes, onions",
        price: 3.99,
        rating: 5,
      },
      {
        name: "Green Lentil Soup",
        ingredient: "Freee range chicken with no antibiotics, potatoes, onions",
        price: 2.99,
        rating: 4.5,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <SortDropdown />
        <div className="row">
          {this.state.foodList.map((item) => (
            <FoodCard key={item.name} food={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default FoodList;
