import "./City.scss";

import { ArrowRight16, Launch16, Warning32 } from "@carbon/icons-react/es";
import React, { useState } from "react";

import HealthWorkerModal from "../HealthWorkerModal";
import { Link } from "react-router-dom";

const City = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HealthWorkerModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="City">
        <div className="bx--grid header">
          <div className="bx--row section section__header">
            <div className="bx--col-md-4 bx--col-lg-4">
              <Link to="/">
                <h4>Health Worker Housing</h4>
              </Link>
            </div>
            <div className="bx--offset-lg-2" />
            <div className="bx--col-sm-0 bx--col-md-2 bx--col-lg-2">
              <a href="#healthcare-workers">For healthcare workers</a>
            </div>
            <div className="bx--col-sm-0 bx--col-md-1 bx--col-lg-2">
              <a href="#property-owners">For property owners</a>
            </div>
            <div className="bx--col-sm-0 bx--col-md-1 bx--col-lg-2">
              <a href="#faqs">FAQs</a>
            </div>
          </div>
        </div>

        <div className="lead-bx--grid">
          <div className="lead-bx--row section">
            <div className="left">
              <h1>Help keep healthcare workers' families safe</h1>
              <p>
                Health Worker Housing is a volunteer initiative designed to
                connect property owners with healthcare workers in need of
                low-cost, short-term housing during the COVID-19 outbreak in
                Vancouver.
              </p>
              <img
                className="hero-image"
                src={"/hero-image.png"}
                alt="Illustration of a healthcare worker's household"
              />
            </div>
            <div className="right light-purple">
              <div
                className="card"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <h4>Healthcare workers</h4>
                <h2>Looking for temporary housing?</h2>
                <div className="link">
                  Request access to listings
                  <ArrowRight16 />
                </div>
              </div>
              <div
                className="divider black"
                style={{ height: "1px", boxShadow: "0 1px 0 black" }}
              />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoDudR3nhYv8KvutU6osarBFqdnNBUq303LI_k2qf0CiRAnQ/viewform?usp=pp_url"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <div>
                  <h4>Property owners</h4>
                  <h2>Have an available furnished suite?</h2>
                  <div className="link">
                    List your property
                    <Launch16 />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bx--grid" id="healthcare-workers">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5">
              <h3>Healthcare Workers</h3>
              <h2>Find temporary housing</h2>
              <p>
                To request access to our listings, submit the form at the link
                below. Once we've confirmed your information, a link to our
                available listings will be sent to your email.
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
              <div className="warning">
                <Warning32 />
                <p>
                  Please note the team running this service has not done any due
                  diligence on any of the offers. We are simply an information
                  service and it is up to each party to meet and screen anyone
                  they would like to enter into a rental agreement with.
                </p>
              </div>
            </div>
            <div className="bx--offset-lg-1" />
            <div className="bx--col-sm-3 bx--col-md-4 bx--col-lg-3">
              <div className="eyebrow">
                <h4>
                  In order to verify those requesting access to our listings, we
                  ask for the following personal information:
                </h4>
                <ul>
                  <li>Name</li>
                  <li>Occupation</li>
                  <li>Place of work</li>
                  <li>Email address</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid light-purple" id="property-owners">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5">
              <h3>Property owners</h3>
              <h2>House a healthcare worker</h2>
              <p>
                We are looking for property owners that have available furnished
                suites they can offer at low or no cost.
              </p>
              <p>
                We ask that you set the rental price below market rent, and
                pro-rate it weekly. This is to alleviate the financial burden on
                healthcare workers that are having to bear the cost of
                alternative housing in addition to their standing mortgage or
                rent payments.
              </p>
            </div>
            <div className="bx--offset-lg-1" />
            <div className="bx--col-sm-3 bx--col-md-4 bx--col-lg-3">
              <div className="eyebrow">
                <h4>Ideal properties will have the following amenities:</h4>
                <ul>
                  <li>Separate entrance</li>
                  <li>Wifi</li>
                  <li>On-site laundry</li>
                  <li>Private washroom</li>
                  <li>Kitchen or kitchenette</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bx--row section" id="list-property">
            <div className="bx--col-md-8 bx--col-lg-12">
              <div className="divider--grey" />
            </div>
          </div>
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5">
              <h4>How do I list my property?</h4>
              <p>
                To list your property, fill out the Google Form at the link
                below with your property information. Your listing and contact
                information will only be shared with essential workers who have
                a legitimate need for affordable accomodation.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoDudR3nhYv8KvutU6osarBFqdnNBUq303LI_k2qf0CiRAnQ/viewform?usp=pp_url"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                List your property
                <Launch16 />
              </a>
            </div>
            <div className="bx--offset-lg-1" />
            <div className="bx--col-sm-4 bx--col-md-0 spacer" />
            <div className="bx--col-md-4 bx--col-lg-5">
              <h4>My listing has been filled, how do I pull it?</h4>
              <ol>
                <li>Email vancouver&#64;healthworkerhousing.ca</li>
                <li>Put "Listing Complete" in the subject line</li>
                <li>Include your name in the body of the email</li>
                <br />
              </ol>
              <p>
                That's it! Thank you for helping to keep a healthcare worker's
                family safe.
              </p>
            </div>
          </div>
        </div>

        <div className="bx--grid dark-purple">
          <div className="bx--row section section__thank-you">
            <div className="bx--col-md-8 bx--offset-lg-1 bx--col-lg-2">
              <h2>Thank you!</h2>
            </div>
            <div className="bx--col-md-8 bx--offset-lg-1 bx--col-lg-7">
              <div className="thank-you-message">
                <p>
                  To the property owners who have made their property available:
                  You are providing a critical service to our frontline workers,
                  and helping to protect the entire Vancouver community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid" id="faqs">
          <div className="bx--row section section__faqs">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="bx--col-sm-4 bx--col-md-7 bx--col-lg-5">
              <div className="question">
                <h4>I'm not a healthcare worker, can I apply for housing?</h4>
                <p>
                  This service is primarily for healthcare workers who carry the
                  highest risk of contracting COVID-19. However, we understand
                  that all essential workers carry some risk and might be
                  seeking temporary, low-cost housing. If you are concerned
                  about exposing your household to COVID-19, we encourage you to
                  apply.
                </p>
              </div>
              <div className="question">
                <h4>Can I email you to say thank you?</h4>
                <p>
                  Please refrain from any other communications to the email
                  addresses provided to allow us to effectively administer
                  requests and offers! If you like, you can share this link on
                  social media and thank us there.
                </p>
              </div>
              <div className="question">
                <h4>Is this service available in other cities?</h4>
                <p>
                  Yes! You can find the site for Victoria{" "}
                  <a
                    href="http://www.yyjlocalsforlocals.com/healthcare/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  {", "}
                  and the site for Toronto{" "}
                  <a
                    href="https://www.yyzhealthcarehousing.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="bx--offset-lg-1" />
            <div className="bx--col-sm-4 bx--col-md-7 bx--col-lg-5">
              <div className="question">
                <h4>Isn't Airbnb already doing this?</h4>
                <p>
                  Listing a property on Airbnb is an involved process that takes
                  a number of steps. We offer a simpler and less formal process
                  so that property owners can be connected with healthcare
                  workers faster.
                </p>
              </div>
              <div className="question">
                <h4>Can I contact you for media enquiries?</h4>
                <p>
                  Yes! For media enquiries, please email
                  vancouver&#64;healthworkerhousing.ca with "Media Inquiry" in
                  the subject line.
                </p>
              </div>
              <div className="question">
                <h4>Can I start this in another city?</h4>
                <p>
                  Yes! Email housing4frontlinehealth&#64;gmail.com with "New
                  City" in the subject line, and we will help you get started.
                  You only need know how to use email and Google Forms to act as
                  a city coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
