import "./App.scss";

import GridHelper from "./components/GridHelper";
import HealthWorkerModalWrapper from "./components/HealthWorkerModalWrapper";
import PropertyOwnerLink from "./components/PropertyOwnerLink";
import React from "react";

function App() {
  console.log(`Application is running in ${process.env.NODE_ENV} mode.`);
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <div className="bx--grid header">
          <div className="bx--row section section__header">
            <div className="bx--col-md-4 bx--col-lg-4">
              <h4>Vancouver Healthcare Worker Housing</h4>
            </div>
            <div className="bx--offset-lg-2" />
            <div className="bx--col-sm-0 bx--col-md-2 bx--col-lg-2">
              <a href="#healthcare-workers">For healthcare workers</a>
            </div>
            <div className="bx--col-sm-0 bx--col-md-2 bx--col-lg-2">
              <a href="#property-owners">For property owners</a>
            </div>
            <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-2">
              <a href="#about">About</a>
            </div>
          </div>
        </div>

        <div className="bx--grid introduction bx--no-gutter">
          <div className="bx--row section section__introduction">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h1>Help keep healthcare workers' families safe</h1>
              <p style={{ maxWidth: "360px" }}>
                This a volunteer project designed to connect property owners
                with healthcare workers that are looking for short-term housing
                during the Covid-19 outbreak in Vancouver.
              </p>
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-6 right border light-purple">
              <div className="card container">
                <h4>Healthcare workers</h4>
                <h2>Looking for alternative housing?</h2>
                <HealthWorkerModalWrapper />
              </div>
              <div className="divider black" />
              <div className="card container">
                <h4>Property owners</h4>
                <h2>Have an available furnished suite?</h2>
                <PropertyOwnerLink />
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid" id="healthcare-workers">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h3>Healthcare Workers</h3>
              <h2>Find temporary alternate housing</h2>
              <p>
                To receive the spreadsheet with available listings, you just
                need to fill out a form. Someone from this team will send you
                the available listings with the information we have on those
                properties.
              </p>
              <HealthWorkerModalWrapper />
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-3 right">
              <div className="eyebrow container">
                <div className="container">
                  <h4>
                    In order to verify those requesting access to our listings,
                    we ask for the following personal information:
                  </h4>
                  <ul>
                    <li>Name</li>
                    <li>Occupation</li>
                    <li>Place of work</li>
                    <li>Email address</li>
                  </ul>
                </div>
                <div className="container">
                  <p>
                    For flexibility, we recommend that you connect with
                    coworkers who you could rent a suite with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid light-purple" id="property-owners">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h3>Property owners</h3>
              <h2>House a healthcare worker</h2>
              <p>
                We are looking for property owners that have available furnished
                suites.
              </p>
              <p>
                We suggest rent to be pro-rated weekly to avoid putting a burden
                on healthcare workers that are having to pay for their regular
                mortgage or rent in addition to the cost of separate housing.
              </p>
              <p>
                The cost is a compromise between market rent, and the price that
                staff can reasonably afford. Our suggested guideline for cost is
                $1000/month for a place that has two beds, inclusive of all
                utilities. In this example, it could house two healthcare
                workers at a cost of $500 each per month.
              </p>
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-3 right">
              <div className="eyebrow container">
                <div className="container">
                  <h4>Ideal properties will have the following amenities:</h4>
                  <ul>
                    <li>Separate entry</li>
                    <li>Wifi</li>
                    <li>On-site laundry</li>
                    <li>Kitchen or kitchenette</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bx--row section" id="list-property">
            <div className="bx--col-md-4 bx--col-lg-12">
              <div className="divider grey" />
            </div>
          </div>
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h4>How do I list my property?</h4>
              <p>
                Fill in this Google Form with your pertinent property
                information. Your listing and contact information will be shared
                with essential workers in need of affordable accomodation.
              </p>
              <PropertyOwnerLink />
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-5 right">
              <div className="container">
                <h4>My listing has been filled, how do I pull it?</h4>
                <ol>
                  <li>Email vancouver@healthworkerhousing.ca</li>
                  <li>Put "Listing Complete" in the email subject line.</li>
                  <li>
                    Put your name in the body of the email, and the name of the
                    listing you'd like to remove.
                    <br />
                    <br />
                    That's it! Thank you for helping to keep a healthcare
                    worker's family safe.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid dark-purple">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-2 left">
              <h2>Thank you!</h2>
            </div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-7 right">
              <div className="thank-you-message container">
                <p>
                  To the property owners who made their property available:  You
                  are providing a critical service to our front-line healthcare
                  staff to protect the entire Vancouver community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
