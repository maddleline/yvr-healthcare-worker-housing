import "./Homepage.scss";

import { ArrowRight16 } from "@carbon/icons-react/es";
import { Link } from "react-router-dom";
import React from "react";

const Homepage = ({ cities }) => {
  return (
    <div className="Homepage">
      <div className="bx--grid lead">
        <div className="bx--row section section__lead">
          <div className="bx--offset-lg-1 bx--col-lg-4 left">
            <div>
              <h1>Help keep healthcare workers' families safe</h1>
              <p>
                Health Worker Housing is a volunteer initiative to connect
                property owners with healthcare workers in need of low-cost,
                short-term housing during the COVID-19 pandemic in Canada.
              </p>
            </div>
            <h3>Select your city below:</h3>
          </div>
          <div className="bx--col-lg-5 right">
            <img
              className="hero-image"
              src={require("./cropped-hero-image.png")}
              alt="Illustration of a healthcare worker's household"
            />
          </div>
          <div className="bx--col-lg-2" />
        </div>
      </div>

      <div className="bx--grid list">
        <div className="bx--row section section__list">
          <div className="bx--offset-lg-1 bx--col-lg-11">
            {cities.map((city) => {
              return (
                <div key={city.url}>
                  <Link to={`/${city.url}`}>
                    {city.name}
                    <ArrowRight16 />
                  </Link>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
