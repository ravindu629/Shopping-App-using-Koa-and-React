import React from "react";
import "../App.css";

export default function () {
  return (
    <div className="menu">
      <a href="/addTrader" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          Create Trader Profile
        </button>
      </a>

      <br />

      <a href="/addItem" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          Add New Item
        </button>
      </a>

      <br />

      <a href="/allCustomers" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          View Customers
        </button>
      </a>

      <br />

      <a href="/inventory" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          View Inventory
        </button>
      </a>

      <br />

      <a href="/addPromotion" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          Add Promotions
        </button>
      </a>

      <br />

      <a href="/promotions" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg menuBtn">
          View Promotions
        </button>
      </a>
    </div>
  );
}
