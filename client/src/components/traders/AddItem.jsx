import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function AddItem() {
  const [item, setItem] = useState({
    iName: "",
    iType: "",
    iBrand: "",
    price: "",
    quantity: "",
    desc: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function sendData(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/items", item)
      .then((res) => {
        alert("item added");
      })
      .catch((err) => {
        alert(err);
      });

    setItem({
      iName: "",
      iType: "",
      iBrand: "",
      price: "",
      quantity: "",
      desc: "",
    });
  }

  return (
    <div className="container">
      <h1>Add New Item</h1>

      <form onSubmit={sendData}>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Item Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="iName"
              placeholder="Enter item name"
              onChange={handleChange}
              value={item.iName}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Item Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="iType"
              placeholder="Enter item type"
              onChange={handleChange}
              value={item.iType}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Item Brand
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id=""
              name="iBrand"
              placeholder="Enter item brand"
              onChange={handleChange}
              value={item.iBrand}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Unit Price
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="number"
              id=""
              name="price"
              placeholder="Enter single unit price"
              onChange={handleChange}
              value={item.price}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Quantity
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="number"
              id=""
              name="quantity"
              placeholder="Enter quantity"
              onChange={handleChange}
              value={item.quantity}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              type="text"
              id=""
              name="desc"
              placeholder="Enter description"
              onChange={handleChange}
              value={item.desc}
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
