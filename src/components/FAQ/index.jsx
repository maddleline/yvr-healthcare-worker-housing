import "./FAQ.scss";

import Footer from "../Footer/";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import data from "./faqData.js";

const FAQ = (props) => {
  let translatedData = props.language === "en" ? data.English : data.French;
  return (
    <div className="FAQ">
      <div className="bx--grid faq">
        <div className="bx--row section section__faq">
          <div className="bx--offset-lg-1 bx--col-lg-5 bx--col-md-7 bx--col-sm-3">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="bx--offset-lg-3 bx--col-lg-1 bx--col-md-1 bx--col-sm-1">
            <div style={{ float: "right" }}>{props.languageToggle}</div>
          </div>
          <div className="bx--col-sm-4 bx--col-md-7 bx--offset-lg-1 bx--col-lg-4">
            {translatedData.faqs.map((faq, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="question" key={index}>
                    <h2>{faq.question}</h2>
                    <p>{ReactHtmlParser(faq.answer)}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="bx--col-sm-4 bx--col-md-7 bx--offset-lg-1 bx--col-lg-4">
            {translatedData.faqs.map((faq, index) => {
              if (index === 1) {
                return [
                  <div className="question" key={index}>
                    <h2>{faq.question}</h2>
                    <p>{ReactHtmlParser(faq.answer)}</p>
                  </div>,
                  <div key="faq-image" className="faq-image-hidden-sm-md">
                    <div className="aspect-ratio-box faq-image" />
                  </div>,
                ];
              } else if (index % 2 === 1) {
                return (
                  <div className="question" key={index}>
                    <h2>{faq.question}</h2>
                    <p>{ReactHtmlParser(faq.answer)}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="bx--col-lg-1" />
          <div className="bx--offset-sm-1 bx--col-sm-2 bx--offset-md-2 bx--col-md-4 bx--col-lg-0">
            <div className="aspect-ratio-box faq-image" />
          </div>
          <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-0" />
        </div>
      </div>
      <Footer
        language={props.language}
        email={
          props.language === "en"
            ? "victoria&#64;healthworkerhousing.ca"
            : "montreal&#64;healthworkerhousing.ca"
        }
        siteIsDormant={props.siteIsDormant}
      />
    </div>
  );
};

export default FAQ;
