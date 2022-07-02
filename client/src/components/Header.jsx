import React from "react";
import "./App.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "blue" }}
        >
          Shopping App IT19208022
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginLeft: "300px",
            }}
            className="navbar-nav me-auto mb-2 mb-lg-0"
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/customer">
                Customer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/trader">
                Trader
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/items">
                Shopping Items
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/promos">
                Promotions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/cart">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
