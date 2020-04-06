import "./Homepage.scss";

import { ArrowRight16 } from "@carbon/icons-react/es";
import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="bx--grid header">
        <div className="bx--row section section__header">
          <div className="bx--col-md-4 bx--col-lg-4">
            <h4>Health Worker Housing</h4>
          </div>
        </div>
      </div>

      <div className="lead-bx--grid">
        <div className="lead-bx--row section">
          <div className="left">
            <h1>Help keep healthcare workers' families safe</h1>
            <p>
              Health Worker Housing is a volunteer initiative to connect
              property owners with healthcare workers in need of low-cost,
              short-term housing during the COVID-19 pandemic.
            </p>
            <img
              className="hero-image"
              src={"/hero-image.png"}
              alt="Illustration of a healthcare worker's household"
            />
          </div>
          <div className="right light-purple">
            <div className="card">
              <h4>
                Health Worker Housing is available in the following cities:
              </h4>
              <br />
              <a
                href="http://www.yyjlocalsforlocals.com/healthcare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  Victoria
                  <ArrowRight16 />
                </p>
              </a>
              <br />
              <Link to="/vancouver">
                <p>
                  Vancouver
                  <ArrowRight16 />
                </p>
              </Link>
              <br />
              <a
                href="https://www.yyzhealthcarehousing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  Toronto
                  <ArrowRight16 />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
