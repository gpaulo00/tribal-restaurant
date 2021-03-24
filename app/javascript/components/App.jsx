import React from "react";
import Routes from "../routes/Index";

export default props => (
    <div className="primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <div className="d-flex flex-wrap align-items-center justify-content-start">
              <img width="150px" src="/tribal-guatemala.png" alt="Tribal"/>
              <h1 className="lead" style={{marginLeft: '10px', fontWeight: 'bold'}}>Restaurantes</h1>
            </div>
            <p style={{fontStyle: 'italic'}}>
              Una lista de restaurantes selectos alrededor del mundo.
            </p>
            <hr className="my-4" />

            <>{Routes}</>
          </div>
        </div>
    </div>
);