import React from "react";
import "./App.css";
import image from "../images/bg.png";

export default function () {
  return (
    <div className="hBtn">
      <a href="/customer" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg homeBtn">
          Start Customer
        </button>
      </a>
      <br />
      <br />
      <a href="/trader" style={{ color: "white" }}>
        <button type="button" className="btn btn-dark btn-lg homeBtn">
          Start Trader
        </button>
      </a>
      <img className="bgImg" src={image} />
    </div>
  );
}
