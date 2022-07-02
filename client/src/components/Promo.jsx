import React from "react";
import "./item.css";

export default function Promo(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>Exp date -- {props.date}</p>
      <p>Item Name -- {props.item}</p>
      <p>promo code -- {props.code}</p>
      <p>description -- {props.desc}</p>
    </div>
  );
}
