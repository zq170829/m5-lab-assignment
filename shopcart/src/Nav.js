import "bootstrap/dist/css/bootstrap.min.css";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Cart from "./Cart";
import DisplayProducts from "./DisplayProducts";

function Nav(props) {
  return (
    <Router>
      <div className="navbar p-5 bg-info">
        <h1>
          <Link to="/" className="text-decoration-none text-white">
            <span className="px-2">Shop 2</span>
            <FontAwesomeIcon
              icon={faRegistered}
              className="fas fa-lg text-white"
            />
            eact
          </Link>
        </h1>
        <p className="text-white">
          <Link to="/showcart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fas fa-lg mx-3 text-white"
            />
          </Link>
          <span className="font-weight-bold text-white">
            {props.ItemCount}
          </span>
           items
        </p>
      </div>

      <Switch>
        <Route exact path="/">
          <DisplayProducts
            products={props.prods}
            increaseBtn={props.increaseBtn}
            decreaseBtn={props.decreaseBtn}
          />
        </Route>
        <Route path="/showcart">
          <Cart prods={props.prods} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
