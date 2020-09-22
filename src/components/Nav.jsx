import React from "react";
import logo from "../images/logos/logo.svg";
import { Link } from "react-router-dom";
import * as Pages from "../pages/PagePaths";
import "../css/App.css";
//sfc stateless functional component
//cc  class component
const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow p-3 mb-5">
      <Link to={Pages.HOME_PAGE}>
        <div className="navbar-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Web React
        </div>
      </Link>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to={Pages.HOME_PAGE}>
            <span className="VerticalCenter PrimaryColor ">
              Hello Jay!(LOGOUT)
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to={Pages.ORDER_PAGE}>
            <img
              src={logo}
              width="30"
              height="30"
              className="VerticalCenter"
              alt=""
              loading="lazy"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
