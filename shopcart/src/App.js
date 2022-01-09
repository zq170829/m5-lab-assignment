import "./App.css";
import "./styles.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Shop to React",
      items: [
        {
          id: 0,
          name: "Unisex Cologne",
          picture: "products/cologne.jpg",
          quantity: 0,
        },
        {
          id: 1,
          name: "Apple iWatch",
          picture: "products/iwatch.jpg",
          quantity: 0,
        },
        {
          id: 2,
          name: "Unique Mug",
          picture: "products/mug.jpg",
          quantity: 0,
        },
        {
          id: 3,
          name: "Mens Wallet",
          picture: "products/wallet.jpg",
          quantity: 0,
        },
      ],
    };
  }
  
  render() {
    const cartCountTotal = this.state.items.reduce((a, b) => a + b.quantity, 0);
    return (
      <div class="shop_cart">
        <div className="title">
          <h1>{this.state.heading}</h1>
          <div className="total">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="">{cartCountTotal} Items</span>
          </div>
        </div>
        {this.state.items.map((item) => (
          <ListGroup className="shop_item" key={item.id}>
            <ListGroupItem>
              <h5 className="shop_name">{item.name}</h5>
              <img
                className="shop_picture"
                src={item.picture}
                width="180"
                height="180"
                alt="shopping item"
              />
              <input type="number" className="shop_quantity" min="0" placeholder={item.quantity}/> quantity
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    );
  }
}

export default App;
