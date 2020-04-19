import "./Homepage.scss";

import { ArrowRight16 } from "@carbon/icons-react/es";
import Footer from "../Footer/";
import { Link } from "react-router-dom";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import data from "./homepageData";

const Homepage = (props) => {
  let translatedData = props.language === "en" ? data.English : data.French;
  return (
    <div className="Homepage">
      <div className="bx--grid lead">
        <div className="bx--row section section__lead">
          <div className="bx--offset-lg-9 bx--col-lg-1">
            <div style={{ float: "right" }}>{props.languageToggle}</div>
          </div>
          <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--col-sm-3 left">
            <div>
              <h1>{translatedData.heading}</h1>
              {translatedData.paragraphs}
            </div>
          </div>
          <div className="bx--offset-lg-0 bx--offset-md-0 bx--offset-sm-1" />
          <div className="bx--col-lg-5 bx--offset-md-0 bx--col-md-5 bx--offset-sm-1 bx--col-sm-3 right">
            <img
              className="hero-image"
              src={require("./cropped-hero-image.png")}
              alt="Illustration of a healthcare worker's household"
            />
          </div>
          <div className="bx--col-lg-2 bx--col-md-0 bx--col-sm-0" />
          <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--col-sm-4">
            <h3 className="select-your-city">{translatedData.cta}</h3>
          </div>
          <div className="bx--col-lg-7 bx--col-md-5 bx--col-sm-0" />
        </div>
      </div>

      <div className="bx--grid list">
        <div className="bx--row section section__list">
          <div className="bx--offset-lg-1 bx--col-lg-9">
            {props.cities.map((city, index) => {
              if (city.isComingSoon) {
                return null;
              }
              return (
                <div key={city.url}>
                  {index !== 0 && <br />}
                  <Link to={`/${city.url}?lang=${props.language}`}>
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
      <Footer
        text={translatedData.footer.text}
        email={props.language === "en" ? "victoria" : "montreal"}
      />
    </div>
  );
};

export default Homepage;
