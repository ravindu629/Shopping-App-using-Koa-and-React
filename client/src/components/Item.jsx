import React from "react";
import "./item.css";

export default function Item(props) {
  function handleClick() {
    const cartItem = {
      name: props.name,
      price: props.price,
    };
    props.onAdd(cartItem);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>Type -- {props.type}</p>
      <p>Brand -- {props.brand}</p>
      <p>Price -- {props.price}</p>
      <p>Description -- {props.desc}</p>
      <button onClick={handleClick}>
        <b>Add To Cart</b>
      </button>
    </div>
  );
}
