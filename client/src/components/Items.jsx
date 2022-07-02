import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Item from "./Item";

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getItems() {
      axios
        .get("http://localhost:5000/items")
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getItems();
  }, []);

  function addToCart(item) {
    axios
      .post("http://localhost:5000/cartItems", item)
      .then((res) => {
        alert("added to the cart");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <Item
            key={item.id}
            name={item.iName}
            type={item.iType}
            brand={item.iBrand}
            price={item.price}
            desc={item.desc}
            onAdd={addToCart}
          />
        );
      })}
    </div>
  );
}
