import "./Homepage.scss";

import { ArrowRight16, FavoriteFilled16 } from "@carbon/icons-react/es";

import { Link } from "react-router-dom";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const Homepage = ({ cities, children, language }) => {
  return (
    <div className="Homepage">
      <div className="bx--grid lead">
        <div className="bx--row section section__lead">
          <div className="bx--offset-lg-9 bx--col-lg-3">{children}</div>
          <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--col-sm-4 left">
            <div>
              <h1>Help keep healthcare workers' families safe</h1>
              <p>
                Health Worker Housing is a volunteer initiative to connect
                healthcare workers with low-cost, short-term housing during the
                COVID-19 pandemic in Canada.
              </p>
              <p>
                The initiative was inspired by a{" "}
                <a
                  href="https://www.facebook.com/groups/MutualAidVictoria/permalink/909420306159725/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nurse's plea
                </a>{" "}
                for low-cost accommodation where she could safely distance from
                her family. Within 24 hours, she received over 75 offers.
              </p>
            </div>
          </div>
          <div className="bx--col-lg-5 bx--offset-md-0 bx--col-md-5 bx--offset-sm-1 bx--col-sm-3 right">
            <img
              className="hero-image"
              src={require("./cropped-hero-image.png")}
              alt="Illustration of a healthcare worker's household"
            />
          </div>
          <div className="bx--col-lg-2 bx--col-md-0 bx--col-sm-0" />
          <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--col-sm-4">
            <h3 className="select-your-city">Select your city below:</h3>
          </div>
          <div className="bx--col-lg-7 bx--col-md-5 bx--col-sm-0" />
        </div>
      </div>

      <div className="bx--grid list">
        <div className="bx--row section section__list">
          <div className="bx--offset-lg-1 bx--col-lg-9">
            {cities.map((city, index) => {
              if (city.isComingSoon) {
                return null;
              }
              return (
                <div key={city.url}>
                  {index !== 0 && <br />}
                  <Link to={`/${city.url}`}>
                    <div>
                      {ReactHtmlParser(city.name)}
                      <ArrowRight16 />
                    </div>
                    <span>{city.action}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="bx--col-lg-2" />
        </div>
      </div>

      <div className="bx--grid footer">
        <div className="bx--row section section__footer">
          <div className="bx--col-sm-3 bx--col-md-6 bx--offset-lg-1 bx--col-lg-5">
            <p>
              <span className="bold inline-icon">
                Created by volunteers with
                <FavoriteFilled16 />
              </span>
            </p>
            <p>victoria&#64;healthworkerhousing.ca</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
