import React, { Component } from "react";
import PropTypes from "prop-types"
import { formatPrice } from "../helpers";

export class Fish extends Component {
  //function si elle est utilise moins d'une fois. mettre dans le BTN
  /* handleClick = () => {
    this.props.addToOrder(this.props.index);
  } */
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    addToOrder: PropTypes.func,
  }

  render() {
    // deconstructering
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailable ? "Add To Order" : "Sold out!"}
        </button>
      </li>
    );
  }
}


export default Fish;
