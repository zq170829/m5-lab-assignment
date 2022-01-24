import "./App.css";
import "./styles.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import {
  faShoppingCart,
  faPlusCircle,
  faMinusCircle,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
    };
  }

  increaseBtn = (addvalue) => {
    if (addvalue.value < 10) {
      const updateValue = addvalue.value++;
      this.setState({ updateValue });
    }
  };

  decreaseBtn = (subvalue) => {
    if (subvalue.value > 0) {
      const updateValue = subvalue.value--;
      this.setState({ updateValue });
    }
  };

  render() {
    return (
      <div class="shop_cart">
        <Nav
          ItemCount={this.state.items
            .map((prod) => prod.value)
            .reduce((acc, curr, index) => acc + curr, 0)}
        />
        <DisplayProducts
          prods={this.state.items}
          increaseBtn={this.increaseBtn}
          decreaseBtn={this.decreaseBtn}
        />
      </div>
    );
  }
}

function Nav(props) {
  return (
    <div className="navbar p-5 bg-info">
      <h1>
      <span className="px-2">Shop 2 </span>
      <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white" />
      eact
      </h1>

      <div>
      <FontAwesomeIcon icon={faShoppingCart} />
        <span className="">{props.ItemCount} Items</span>
      </div>
    </div>
  );
}

function DisplayProducts(props) {
  return (
    <div>
      {props.prods.map((product) => {
        return (
          <div key={product.id} className="border border-1 p-3">
            <h4 className="mx-5">{product.desc}</h4>
            <img
              src={product.image}
              width="150"
              alt={product.desc}
              className="mx-5"
            />
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.increaseBtn(product)}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => props.decreaseBtn(product)}
            >
              <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
            </button>
            <span id="qty" className="mx-5 p-3 border border-3">
              {product.value}
            </span>
            quantity
          </div>
        );
      })}
    </div>
  );
}

export default App;
