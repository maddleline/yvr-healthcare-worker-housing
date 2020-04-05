import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="bx--grid header">
        <div className="bx--row section section__header">
          <div className="bx--col-md-4 bx--col-lg-4">
            <h4>Health Worker Housing</h4>
          </div>
        </div>
      </div>

      <div className="introduction-bx--grid introduction">
        <div className="introduction-bx--row section section__introduction">
          <div className="left">
            <h1>Help keep healthcare workers' families safe</h1>
            <p>
              This a volunteer initiative designed to connect property owners
              with healthcare workers in need of low-cost, short-term housing
              during the COVID-19 outbreak in Canada.
            </p>
            <img
              className="hero-image"
              src={"/hero-image.png"}
              alt="Illustration of a healthcare worker's household"
            />
          </div>
          <div className="right">
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
                Victoria
              </a>
              <br />
              <Link to="/vancouver">Vancouver</Link>
              <br />
              <a
                href="https://www.yyzhealthcarehousing.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toronto
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
