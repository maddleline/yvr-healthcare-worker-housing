import "./App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Select, SelectItem } from "carbon-components-react";

import City from "./components/City";
import GridHelper from "./components/GridHelper";
import React from "react";
import cities from "./data.json";
import { useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();

  return (
    <>
      {process.env.NODE_ENV === "development" && <GridHelper />}
      <div className="App">
        <Switch>
          {cities.map((currentCity) => {
            return (
              <Route key={currentCity.url} path={`/${currentCity.url}`}>
                <City
                  cityName={currentCity.name}
                  propertyOwnerLink={currentCity.propertyOwnerLink}
                >
                  <Select
                    className="city-selector"
                    defaultValue={currentCity.url}
                    disabled={false}
                    id="select-1"
                    inline={false}
                    invalid={false}
                    invalidText="A valid value is required"
                    light={false}
                    onChange={(e) => {
                      history.push(`/${e.target.value}`);
                    }}
                    size={undefined}
                  >
                    {cities.map((city) => {
                      return (
                        <SelectItem
                          key={city.url}
                          disabled={false}
                          hidden={false}
                          text={city.name}
                          value={city.url}
                        />
                      );
                    })}
                  </Select>
                </City>
              </Route>
            );
          })}
          <Route path="/">
            <City>
              <Select
                className="city-selector"
                defaultValue="placeholder-item"
                disabled={false}
                id="select-1"
                inline={false}
                invalid={false}
                invalidText="A valid value is required"
                light={false}
                onChange={(e) => {
                  history.push(`/${e.target.value}`);
                }}
                size={undefined}
              >
                <SelectItem
                  disabled
                  hidden
                  text="Choose an option"
                  value="placeholder-item"
                />
                {cities.map((city) => {
                  return (
                    <SelectItem
                      key={city.url}
                      disabled={false}
                      hidden={false}
                      text={city.name}
                      value={city.url}
                    />
                  );
                })}
              </Select>
            </City>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
