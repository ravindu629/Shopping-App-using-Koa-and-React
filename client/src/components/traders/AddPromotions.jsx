import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function AddPromotions() {
  const [promo, setPromo] = useState({
    promoCode: "",
    promoTitle: "",
    promoItem: "",
    date: "",
    desc: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPromo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function sendData(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/promotions", promo)
      .then((res) => {
        alert("promotion added");
      })
      .catch((err) => {
        alert(err);
      });

    setPromo({
      promoCode: "",
      promoTitle: "",
      promoItem: "",
      date: "",
      desc: "",
    });
  }

  return (
    <div className="container">
      <h1>Add New Promotion</h1>

      <form onSubmit={sendData}>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Promotion Code
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="promoCode"
              placeholder="Enter promotion code"
              onChange={handleChange}
              value={promo.promoCode}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Promotion Title
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="promoTitle"
              placeholder="Enter promotion title"
              onChange={handleChange}
              value={promo.promoTitle}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Promotion Item
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="promoItem"
              placeholder="Enter promotion Item"
              onChange={handleChange}
              value={promo.promoItem}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Last Valid Date
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="date"
              id=""
              name="date"
              placeholder="Enter last valid date"
              onChange={handleChange}
              value={promo.date}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="desc"
              placeholder="Enter description"
              onChange={handleChange}
              value={promo.desc}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
