import React from "react";
import "../App.css";

export default function () {
  return (
    <div className="menu">
      <a href="/addCustomer" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          Create Customer Profile
        </button>
      </a>

      <br />

      <a href="/items" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          View All Items
        </button>
      </a>

      <br />

      <a href="/cart" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          View Cart
        </button>
      </a>

      <br />

      <a href="/cart" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          Purchase
        </button>
      </a>
    </div>
  );
}
