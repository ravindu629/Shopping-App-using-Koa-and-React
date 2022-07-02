import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function AddTrader() {
  const [trader, setTrader] = useState({
    traderName: "",
    tradename: "",
    address: "",
    pNumber: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTrader((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function sendData(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/traders", trader)
      .then((res) => {
        alert("created trader profile");
        // console.log(res);
      })
      .catch((err) => {
        alert(err);
      });

    setTrader({
      traderName: "",
      tradename: "",
      address: "",
      pNumber: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="container">
      <h1>Create Trader Profile</h1>

      <form onSubmit={sendData}>
        <div className="form-group row">
          <label for="trdName" className="col-sm-2 col-form-label">
            Trader Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="trdName"
              name="traderName"
              placeholder="Enter first name"
              onChange={handleChange}
              value={trader.traderName}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="trName" className="col-sm-2 col-form-label">
            Trade Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="trName"
              name="tradename"
              placeholder="Enter last name"
              onChange={handleChange}
              value={trader.tradename}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="ads" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="ads"
              name="address"
              placeholder="Enter NIC"
              onChange={handleChange}
              value={trader.address}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="phone" className="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="number"
              id="phone"
              name="pNumber"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={trader.pNumber}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="mail" className="col-sm-2 col-form-label">
            Email Address
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="email"
              id="mail"
              name="email"
              placeholder="Enter email address "
              onChange={handleChange}
              value={trader.email}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="pass" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="password"
              id="pass"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={trader.password}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
