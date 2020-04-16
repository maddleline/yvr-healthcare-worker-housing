import "./App.scss";
import "./Toggle.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";

import City from "./components/City";
import FAQ from "./components/FAQ";
import GridHelper from "./components/GridHelper";
import Homepage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";
import { Toggle } from "carbon-components-react";
import data from "./cityData";

export default function App() {
  const [language, setLanguage] = useState("en");
  let translatedData = language === "en" ? data.English : data.French;
  const languageToggle = (
    <Toggle
      aria-label=""
      className="language-toggle"
      defaultToggled={language === "en" ? false : true}
      id="language-toggle"
      labelA=""
      labelB=""
      labelText=""
      onChange={() => {}}
      onToggle={() => {
        language === "en" ? setLanguage("fr") : setLanguage("en");
      }}
    />
  );
  const cityRoutes = translatedData.cities.map((city) => {
    if (city.isComingSoon) {
      return null;
    }
    return (
      <Route key={city.url} path={`/${city.url}`}>
        <City {...city} language={language} languageToggle={languageToggle} />
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
                  <h3>{translatedData.title}</h3>
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
            <Route path={`/faq`}>
              <FAQ languageToggle={null} />
            </Route>
            <Route path={`/`}>
              <Homepage
                language={language}
                cities={translatedData.cities}
                languageToggle={languageToggle}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
