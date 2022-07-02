import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Promotions() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    function getPromos() {
      axios
        .get("http://localhost:5000/promotions")
        .then((res) => {
          setPromos(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPromos();
  }, []);

  return (
    <div>
      <div className="all">
        <h1>All Promotions Details</h1>
        <table className="table table-bordered ">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Promotion Code</th>
              <th scope="col">Promotion Title</th>
              <th scope="col">Item Name</th>
              <th scope="col">Valid Date</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {promos.map((promotion, index) => {
              return (
                <tr key={promotion.id}>
                  <td>{index + 1}</td>
                  <td>{promotion.promoCode}</td>
                  <td>{promotion.promoTitle}</td>
                  <td>{promotion.promoItem}</td>
                  <td>{promotion.date}</td>
                  <td>{promotion.desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
