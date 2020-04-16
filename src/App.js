import "./App.scss";
import "./Toggle.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import City from "./components/City";
import FAQ from "./components/FAQ";
import GridHelper from "./components/GridHelper";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Toggle } from "carbon-components-react";
import data from "./cityData";
import queryString from "query-string";

export default function App() {
  const language = queryString.parse(document.location.search).lang || "en";
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
        const _url = document.location.href;
        let _newUrl = "";
        if (language === "en") {
          _newUrl += _url.split("?")[0] + "?lang=fr";
        } else {
          _newUrl += _url.split("?")[0] + "?lang=en";
        }
        document.location.replace(_newUrl);
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
          <Header language={language} pageTitle={translatedData.title} />

          <Switch>
            {cityRoutes}
            <Route path={`/faq`}>
              <FAQ language={language} languageToggle={languageToggle} />
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
