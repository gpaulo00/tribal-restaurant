import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <div className="d-flex align-items-center justify-content-between">
          <img width="150px" src="/tribal-guatemala.png" alt="Tribal"/>
          <h1 className="display-5">Restaurantes</h1>
        </div>
        <br />
        <p className="lead">
          Una lista de restaurantes selectos alrededor del mundo.
        </p>
        <hr className="my-4" />
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);