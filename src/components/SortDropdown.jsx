import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/App.css";
import { Row } from "react-bootstrap";

class SortDropdown extends Component {
  state = {};
  render() {
    return (
      <Row className="">
        Sort By:
        <DropdownButton id="sort-dropdown" title="Name">
          <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
        </DropdownButton>
      </Row>
    );
  }
}

export default SortDropdown;
