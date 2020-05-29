import "./City.scss";

import { ArrowRight16, Launch16, View16 } from "@carbon/icons-react/es";
import React, { useState } from "react";

import Footer from "../Footer/";
import HealthWorkerModal from "../HealthWorkerModal";
import PropertyOwnerModal from "../PropertyOwnerModal";
import ReactHtmlParser from "react-html-parser";
import data from "./cityPageData";

const City = (props) => {
  const [isHealthWorkerModalOpen, setIsHealthWorkerModalOpen] = useState(false);
  const [isPropertyOwnerModalOpen, setIsPropertyOwnerModalOpen] = useState(
    false
  );
  let translatedData = props.language === "en" ? data.English : data.French;
  return (
    <>
      <HealthWorkerModal
        {...props}
        isOpen={isHealthWorkerModalOpen}
        setIsOpen={setIsHealthWorkerModalOpen}
      />
      <PropertyOwnerModal
        {...props}
        isOpen={isPropertyOwnerModalOpen}
        setIsOpen={setIsPropertyOwnerModalOpen}
      />
      <div className="City">
        <div className="bx--grid city-name">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-5 bx--col-md-7 bx--col-sm-3">
              <h1>
                {ReactHtmlParser(props.name)},
                <br />
                <span>{ReactHtmlParser(props.province)}, Canada</span>
              </h1>
            </div>
            <div className="bx--offset-lg-3 bx--col-lg-1 bx--col-md-1 bx--col-sm-1">
              <div style={{ float: "right" }}>{props.languageToggle}</div>
            </div>
          </div>
        </div>

        <div className="bx--grid health-workers">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--offset-md-0 bx--offset-sm-1 bx--col-sm-2 health-workers-image-container">
              <div className="aspect-ratio-box health-workers-image" />
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-1" />
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4 health-workers-text">
              <h2>{translatedData.healthcareWorkers.heading}</h2>
              <h3>{translatedData.healthcareWorkers.subHeading}</h3>
              {translatedData.healthcareWorkers.paragraphs}
              <a
                className="link"
                onClick={() => {
                  setIsHealthWorkerModalOpen(true);
                }}
              >
                <div>
                  {translatedData.healthcareWorkers.linkText}
                  <ArrowRight16 />
                </div>
                <span>
                  <View16 />
                  <View16 />
                </span>
              </a>
            </div>
            <div className="bx--col-lg-3" />
          </div>
        </div>

        <div className="bx--grid property-owners">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3 bx--offset-md-0 bx--offset-sm-1 bx--col-sm-2 property-owners-image-container">
              <div className="aspect-ratio-box property-owners-image" />
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-1" />
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4 property-owners-text">
              <h2>{translatedData.propertyOwners.heading}</h2>
              <h3>{translatedData.propertyOwners.subHeading}</h3>
              {translatedData.propertyOwners.paragraphs}
              <h4>{translatedData.propertyOwners.listHeading}</h4>
              <ul>
                {translatedData.propertyOwners.listItems.map(
                  (listItem, index) => {
                    return <li key={index}>{listItem}</li>;
                  }
                )}
              </ul>
              {props.siteIsDormant ? (
                <a
                  className="link"
                  onClick={() => {
                    setIsPropertyOwnerModalOpen(true);
                  }}
                >
                  <div>
                    {translatedData.propertyOwners.linkText}
                    <ArrowRight16 />
                  </div>
                  <span>{translatedData.propertyOwners.linkHoverText}</span>
                </a>
              ) : (
                <a
                  href={props.linkToPropertyForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <div>
                    {translatedData.propertyOwners.linkText}
                    <Launch16 />
                  </div>
                  <span>{translatedData.propertyOwners.linkHoverText}</span>
                </a>
              )}
            </div>
            <div className="bx--offset-lg-3" />
          </div>
        </div>
        <Footer
          language={props.language}
          email={props.email}
          siteIsDormant={props.siteIsDormant}
        />
      </div>
    </>
  );
};

export default City;
