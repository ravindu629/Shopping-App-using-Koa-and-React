import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    function getItems() {
      axios
        .get("http://localhost:5000/cartItems")
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getItems();
  }, []);

  let sum = 0;

  items.forEach((item) => {
    sum += Number(item.price);
  });

  function calculate() {
    setValid(true);
  }

  return (
    <div className="alll">
      <h1>Customer Selected Shopping Items </h1>
      <table className="table table-bordered ">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Item Price / Rs.</th>
          </tr>
        </thead>
        <tbody className="table-light">
          {items.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}.00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button onClick={calculate}>
        <h2>
          <b>Purchase</b>
        </h2>
      </button>
      <br />
      <br />
      {valid && <h2>Total Price is : {sum}.00</h2>}
    </div>
  );
}
