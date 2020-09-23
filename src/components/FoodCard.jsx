import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import ReactStars from "react-rating-stars-component";

class FoodCard extends Component {
  state = {};

  render() {
    return (
      <div className="container shadow CardContainer">
        <h5>{this.props.food.name}</h5>
        <p>{this.props.food.ingredient}</p>
        <p>${this.props.food.price}</p>
        <ReactStars
          count={5}
          edit={false}
          size={24}
          isHalf={true}
          value={this.props.food.rating}
          activeColor="#ffd700"
        />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light">
            -
          </button>
          <span type="button" className="btn">
            1
          </span>
          <button type="button" className="btn btn-light">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default FoodCard;
