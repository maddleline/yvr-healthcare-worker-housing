import "./City.scss";

import { ArrowRight16, Launch16 } from "@carbon/icons-react/es";
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
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-11">
              <h3>{props.name}</h3>
              <h4>{props.province}, Canada</h4>
            </div>
          </div>
        </div>

        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4">
              <div
                style={{
                  height: "19rem",
                  width: "19rem",
                  backgroundColor: "slategrey",
                  borderRadius: "19rem",
                }}
              />
            </div>
            <div className="bx--col-lg-5">
              <h3>Find temporary housing</h3>
              <h5>Healthcare workers</h5>
              <p>
                To request access to our listings, submit the form at the link
                below. Once your request has been approved, a link to our
                available listings will be sent to your email.
              </p>
              <p>
                Please note the team running this service has not done any due
                diligence on any of the offers. We are simpl an information
                service and it is up to each party to meet and screen anyone
                they would like to enter into a rental agreement with.
              </p>
              <div
                className="link"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Request access to listings
                <ArrowRight16 />
              </div>
            </div>
            <div className="bx--col-lg-2" />
          </div>
        </div>

        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--offset-lg-1 bx--col-lg-4">
              <div
                style={{
                  height: "19rem",
                  width: "19rem",
                  backgroundColor: "mintcream",
                  borderRadius: "19rem",
                }}
              />
            </div>
            <div className="bx--col-lg-5">
              <h3>House a healthcare worker</h3>
              <h5>Property owners</h5>
              <p>
                We are looking for property owners that have available furnished
                suites the can offer at low or no cost.
              </p>
              <p>
                We ask that you set the rental price below market rent, and
                pro-rate it weekly. This is to alleviate the financial burden on
                healthcare workers that are having to bear the cost of
                alternative housing in addition to their standing mortage or
                rent payments.
              </p>
              <h4>Ideal properties will have the following amenities:</h4>
              <ul>
                <li>Separate entrance</li>
                <li>Wifi</li>
                <li>On-site laundry</li>
                <li>Private washroom</li>
                <li>Kitchen or kitchenette</li>
              </ul>
              <a
                href={props.linkToPropertyForm}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                List your property
                <Launch16 />
              </a>
            </div>
            <div className="bx--offset-lg-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
