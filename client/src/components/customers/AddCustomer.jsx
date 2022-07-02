import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function AddCustomer() {
  const [customer, setCustomer] = useState({
    fName: "",
    lName: "",
    nic: "",
    pNumber: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function sendData(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/customers", customer)
      .then((res) => {
        alert("created customer profile");
        // console.log(res);
      })
      .catch((err) => {
        alert(err);
      });

    setCustomer({
      fName: "",
      lName: "",
      nic: "",
      pNumber: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="container">
      <h1>Create Customer Profile</h1>

      <form onSubmit={sendData}>
        <div className="form-group row">
          <label for="fname" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="fname"
              name="fName"
              placeholder="Enter first name"
              onChange={handleChange}
              value={customer.fName}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="lname" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="lname"
              name="lName"
              placeholder="Enter last name"
              onChange={handleChange}
              value={customer.lName}
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="Nic" className="col-sm-2 col-form-label">
            NIC
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              id="Nic"
              name="nic"
              placeholder="Enter NIC"
              onChange={handleChange}
              value={customer.nic}
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
              value={customer.pNumber}
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
              value={customer.email}
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
              value={customer.password}
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
