import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    function getCustomers() {
      axios
        .get("http://localhost:5000/customers")
        .then((res) => {
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCustomers();
  }, []);

  return (
    <div className="all">
      <h1>All Customers Details</h1>
      <table className="table table-bordered ">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody className="table-light">
          {customers.map((customer, index) => {
            return (
              <tr key={customer.id}>
                <td>{index + 1}</td>
                <td>{customer.fName}</td>
                <td>{customer.lName}</td>
                <td>{customer.nic}</td>
                <td>{customer.pNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllCustomers;
