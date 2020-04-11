import "./App.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import City from "./components/City";
import FAQ from "./components/FAQ";
import GridHelper from "./components/GridHelper";
import Homepage from "./components/Homepage";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import cities from "./cityData.json";

export default function App() {
  const cityRoutes = cities.map((city) => {
    return (
      <Route key={city.url} path={`/${city.url}`}>
        <City {...city} />
      </Route>
    );
  });
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <Router>
        <ScrollToTop />
        <div className="App">
          <div className="bx--grid header">
            <div className="bx--row section section__header">
              <div className="bx--col-sm-3 bx--col-md-6 bx--offset-lg-1 bx--col-lg-5">
                <Link to="/">
                  <h3>Health Worker Housing</h3>
                </Link>
              </div>
              <div className="bx--col-sm-1 bx--col-md-2 bx--offset-lg-3 bx--col-lg-1">
                <div style={{ float: "right" }}>
                  <Link to="/faq">
                    <h3>FAQ</h3>
                  </Link>
                </div>
              </div>
              <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-2" />
            </div>
          </div>

          <Switch>
            {cityRoutes}
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/">
              <Homepage cities={cities} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
