import "./App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import City from "./components/City";
import GridHelper from "./components/GridHelper";
import Homepage from "./components/Homepage";
import React from "react";

export default function App() {
  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <Router>
          <Switch>
            <Route path="/vancouver">
              <City />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
