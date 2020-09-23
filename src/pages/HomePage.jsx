import React, { Component } from "react";
import Filter from "../components/Filter";
import FoodList from "../components/FoodList";
import "bootstrap/dist/css/bootstrap.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-mid-3 col-xl-2 bd-sidebar">
            <Filter />
          </div>
          <div className="col-md-9 col-xl-8 bd-content">
            <FoodList />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
