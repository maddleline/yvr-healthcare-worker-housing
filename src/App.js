import "./App.scss";

import { ArrowRight16 } from "@carbon/icons-react/es";
import GridHelper from "./components/GridHelper";
import React from "react";

function App() {
  console.log(`Application is running in ${process.env.NODE_ENV} mode.`);
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <div className="bx--grid">
          <div className="bx--row section section__introduction">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h1>Help keep healthcare workers families safe</h1>
              <p style={{ maxWidth: "360px" }}>
                This a volunteer project designed to connect property owners
                with healthcare workers that are looking for short-term housing
                during the Covid-19 outbreak in Vancouver.
              </p>
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-4 right border">
              <div>
                <h4>Healthcare workers</h4>
                <h2>Looking for alternative housing?</h2>
                <a href="#">
                  Browse available listings
                  <ArrowRight16 />
                </a>
              </div>
              <div>
                <h4>Property owners</h4>
                <h2>Have an available furnished suite?</h2>
                <a href="#">
                  Browse available listings
                  <ArrowRight16 />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid">
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
              <a href="#">
                Receive available listings
                <ArrowRight16 />
              </a>
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-3 right">
              <div className="eyebrow">
                <div>
                  <h4>Information requested on the form</h4>
                  <p>Name</p>
                  <p>Email address</p>
                </div>
                <div>
                  <p>
                    For flexibility, we recommend that you connect with
                    coworkers who you could rent a suite with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bx--grid light-purple">
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
                on health care workers that are having to pay for their regular
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
              <div className="eyebrow">
                <div>
                  <h4>Property requirements</h4>
                  <p>Separate Entry</p>
                  <p>Wifi</p>
                </div>
                <div>
                  <p style={{ fontStyle: "italic" }}>
                    Ideally, suites also have:
                  </p>
                  <p>Laundry on site</p>
                  <p>A short commute to a major healthcare facility</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-12">
              <div className="divider" />
            </div>
          </div>
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-5 left">
              <h4>How do I list my property?</h4>
              <p>
                Fill in this Google Form with your pertinent property
                information and wait for calls or emails from health care
                workers.
              </p>
              <a href="#">
                List my property for healthcare workers
                <ArrowRight16 />
              </a>
            </div>
            <div className="bx--offset-lg-1 left--gutter" />
            <div className="bx--col-md-4 bx--col-lg-5 right">
              <div>
                <h4>I'd like to make a change to my listing.</h4>
                <p>
                  If you need to amend your listing for any reason, email
                  XXXXXXXX@gmail.com with the phrase “Listing Amendment” in the
                  email subject line.
                </p>
              </div>
              <div>
                <h4>My listing has been filled, how do I pull it?</h4>
                <ol>
                  <li>Email xxxx@gmail.com</li>
                  <li>Put “ Listing Complete” in the email subject line.</li>
                  <li>
                    Put your name in the body of the email, and the name of the
                    listing you'd like to remove.
                    <br />
                    <br />
                    That's it! Thank you for helping to keep a health care
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
              <div className="thank-you-message">
                <p>
                  To the property owners who made their property available:  You
                  are providing a critical service to our front-line health care
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
