import "./City.scss";

import { ArrowRight16, Launch16, View16 } from "@carbon/icons-react/es";
import React, { useState } from "react";

import HealthWorkerModal from "../HealthWorkerModal";

const City = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HealthWorkerModal
        {...props}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
      <div className="City">
        <div className="bx--grid city-name">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-11 bx--col-md-8">
              <h1>
                {props.name},
                <br />
                <span>{props.province}, Canada</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="bx--grid property-owners">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3">
              <img
                src={require("./property-owners.png")}
                alt="Illustration of health workers"
              />
            </div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <h2>House a healthcare worker</h2>
              <h3>Property owners</h3>
              <p>
                We are looking for property owners that have available furnished
                suites they can offer at low or no cost.
              </p>
              <p style={{ marginBottom: "25px" }}>
                We ask that you set the rental price below market rent, and
                pro-rate it weekly. This is to alleviate the financial burden on
                healthcare workers that are having to bear the cost of
                alternative housing in addition to their standing mortage or
                rent payments.
              </p>
              <h4>Ideal properties will have the following amenities:</h4>
              <ul>
                <li>Separate entrance</li>
                <li>On-site laundry</li>
                <li>Private washroom</li>
                <li>Kitchen or kitchenette</li>
                <li>Wifi</li>
              </ul>
              <a
                href={props.linkToPropertyForm}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <div>
                  List your property
                  <Launch16 />
                </div>
                <span>Thanks!</span>
              </a>
            </div>
            <div className="bx--offset-lg-3" />
          </div>
        </div>

        <div className="bx--grid health-workers">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4 bx--col-md-3">
              <img
                src={require("./health-workers.png")}
                alt="Illustration of health workers"
              />
            </div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <h2>Find temporary housing</h2>
              <h3>Healthcare workers</h3>
              <p>
                To request access to our listings, submit the form at the link
                below. Once your request has been approved, a link to our
                available listings will be sent to your email.
              </p>
              <p>
                <span className="italic">
                  Please note the team running this service has not done any due
                  diligence on any of the offers. We are simply an information
                  service and it is up to each party to meet and screen anyone
                  they would like to enter into a rental agreement with.
                </span>
              </p>
              <div
                className="link"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <div>
                  Request access to listings
                  <ArrowRight16 />
                </div>
                <span>
                  <View16 />
                  <View16 />
                </span>
              </div>
            </div>
            <div className="bx--col-lg-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
