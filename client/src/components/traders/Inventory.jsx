import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Inventory() {
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

  return (
    <div>
      <div className="all">
        <h1>Inventory Details</h1>
        <table className="table table-bordered ">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Type</th>
              <th scope="col">Item Brand</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.iName}</td>
                  <td>{item.iType}</td>
                  <td>{item.iBrand}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/updateItem/${item.id}`}
                    >
                      Update Item
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
