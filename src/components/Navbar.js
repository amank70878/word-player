import React from "react";
import { Link } from 'react-router-dom'
import "../componentsStyle/navbar.css";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <b>
          {props.title}
          </b>
        </span>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              disabled
            />
            <button
              className={`btn text-${
                props.mode === "light" ? "dark" : "light"
              } btn-${props.mode === "dark" ? "dark" : "light"} btn-outline-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="submit"
              disabled
            >
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input my-4"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

