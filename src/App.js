import React from "react";
import "./css/App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import * as Pages from "./pages/PagePaths";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path={Pages.HOME_PAGE} exact component={HomePage} />
          <Route path={Pages.ORDER_PAGE} component={OrderPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
