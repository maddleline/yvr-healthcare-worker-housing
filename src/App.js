import "./App.scss";

import GridHelper from "./components/GridHelper";
import React from "react";

function App() {
  console.log(`Application is running in ${process.env.NODE_ENV} mode.`);
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <div className="bx--grid">
          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-7">
              <h1>Vancouver Healthcare Worker Housing</h1>
              <p>
                This website is a volunteer project designed to connect property
                owners with healthcare workers that are looking for short-term
                housing during the Covid-19 outbreak in Vancouver. Specifically,
                we are looking for property owners that have available furnished
                suites. We are providing listings to healthcare workers on a
                daily basis.
              </p>
              <p>
                This project started out of a social media plea made by a
                front-line nurse at Royal Jubilee Hospital in Victoria, BC who
                was unable to find alternate housing during the outbreak to keep
                her family safely distanced.
              </p>
              <p>
                We suggest rent to be pro-rated weekly to avoid putting a burden
                on health care workers that are having to pay for their regular
                mortgage or rent in addition to the cost of separate housing.
                The cost is a compromise between market rent, and the price that
                staff can reasonably afford. Our suggested guideline for cost is
                $1000/month for a place that has two beds, inclusive of all
                utilities. In this example, it could house two healthcare
                workers at a cost of $500 each per month.
              </p>
              <p>
                Please note the team that runs this service has not done any due
                diligence on any of the offers. We are simply an information
                service and it is up to each party to meet and screen anyone
                they would like to enter into an agreement with.
              </p>
            </div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8" />
          </div>

          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-7">
              <h2>For Property Owners</h2>
              <p>
                Fill in this Google Form with your pertinent property
                information and wait for calls or emails from health care
                workers.
              </p>
              <p>
                Properties must be furnished with a separate entry and wifi, and
                available at a significantly reduced cost during this
                exceptional time. Ideally, properties will have laundry
                available and be within a short commute of a major healthcare
                facility.
              </p>
              <p>
                When your listing is filled or you’d like to pull your opening,
                email XXXXXXXX@gmail.com with the phrase “Listing Complete” in
                the email subject line. In the body of the email, let us know
                your name and listing to remove.
              </p>
              <p>
                If you need to amend your listing for any reason, email
                XXXXXXXX@gmail.com with the phrase “Listing Amendment” in the
                email subject line.
              </p>
              <p>
                Thank you to property owners who have a place available that
                meets these criteria: you are providing a critical service to
                our front-line health care staff to protect the entire Victoria
                community.
              </p>
            </div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8" />
          </div>

          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-7">
              <h2>For Healthcare Workers</h2>
              <p>Fill in this Google Form.</p>
              <p>
                Someone from this team will send you the available listings with
                the information we have on those properties. For flexibility,
                you may want to connect with coworkers that you could rent a
                suite with.
              </p>
              <p>
                The spreadsheet will be updated daily. The spreadsheet will only
                be sent to health care workers who have filled in the form.
              </p>
            </div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8" />
          </div>

          <div className="bx--row section">
            <div className="bx--col-md-4 bx--col-lg-7">
              <p>
                Please refrain from any other communications to the email
                address provided to allow us to effectively administer requests
                and offers! If you want to say “thanks”, please post a link on
                social media and thank us there.
              </p>
              <p>
                Want to start this program in another city across Canada? Email
                Housing4frontlinehealth@gmail.com with “New City” in the subject
                line. You are welcome to copy the idea, this text, and the
                workflow process.
              </p>
            </div>
            <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
