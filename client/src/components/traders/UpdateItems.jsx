import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../App.css";

export default function UpdateItems() {
  const [item, setItem] = useState({
    iName: "",
    iType: "",
    iBrand: "",
    price: "",
    quantity: "",
    desc: "",
  });

  const { id } = useParams();

  useEffect(() => {
    function getItem() {
      axios
        .get(`http://localhost:5000/items/${id}`)
        .then((res) => {
          setItem(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getItem();
  }, []);

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
      .put(`http://localhost:5000/items/${id}`, item)
      .then((res) => {
        alert("item updated");
      })
      .catch((err) => {
        alert(err);
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
              onChange={handleChange}
              value={item.desc}
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Update Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
