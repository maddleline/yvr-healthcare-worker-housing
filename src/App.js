import "./App.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import City from "./components/City";
import FAQpage from "./components/Homepage";
import GridHelper from "./components/GridHelper";
import Homepage from "./components/Homepage";
import React from "react";
import cities from "./data.json";

export default function App() {
  const cityRoutes = cities.map((city) => {
    return (
      <Route key={city.url} path={`/${city.url}`}>
        <City cityName={city.name} />
      </Route>
    );
  });
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <Router>
        <div className="App">
          <div className="bx--grid header">
            <div className="bx--row section section__header">
              <div className="bx--col-sm-3 bx--col-md-6 bx--col-lg-6">
                <Link to="/">
                  <h4>Health Worker Housing</h4>
                </Link>
              </div>
              <div className="bx--col-sm-1 bx--col-md-2 bx--offset-lg-4 bx--col-lg-2">
                <Link to="/faq">
                  <h4>FAQ</h4>
                </Link>
              </div>
            </div>
          </div>

          <Switch>
            {cityRoutes}
            <Route path="/">
              <Homepage cities={cities} />
            </Route>
            <Route path="/faq">
              <FAQpage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
