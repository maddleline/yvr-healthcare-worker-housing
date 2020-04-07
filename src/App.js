import "./App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import City from "./components/City";
import GridHelper from "./components/GridHelper";
import Homepage from "./components/Homepage";
import React from "react";
import cities from "./data.json";

export default function App() {
  const cityRoutes = cities.map((city) => {
    return (
      <Route path={`/${city.url}`}>
        <City cityName={city.name} />
      </Route>
    );
  });
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <Router>
          <Switch>
            {cityRoutes}
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
