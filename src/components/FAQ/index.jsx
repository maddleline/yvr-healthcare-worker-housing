import "./FAQ.scss";

import React from "react";

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="bx--grid faq">
        <div className="bx--row section section__faq">
          <div className="bx--col-sm-4 bx--col-md-8 bx--offset-lg-1 bx--col-lg-10">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="bx--col-lg-1" />
          <div
            className="bx--col-sm-4 bx--col-md-7 bx--offset-lg-1 bx--col-lg-5"
            style={{ paddingRight: "3rem" }}
          >
            <div className="question">
              <h4>I'm not a healthcare worker, can I apply for housing?</h4>
              <p>
                This service is primarily for healthcare workers who carry the
                highest risk of contracting COVID-19. However, we understand
                that all essential workers carry some risk and might be seeking
                temporary, low-cost housing. If you are concerned about exposing
                your household to COVID-19, we encourage you to apply.
              </p>
            </div>
            <div className="question">
              <h4>Can I email you to say thank you?</h4>
              <p>
                Please refrain from any other communications to the email
                addresses provided to allow us to effectively administer
                requests and offers! If you like, you can share this link on
                social media and thank us there.
              </p>
            </div>
            <div className="question">
              <h4>Can I contact you for media enquiries?</h4>
              <p>
                Yes! For media enquiries, please email
                housing4frontline&#64;gmail.com with "Media Inquiry" in the
                subject line.
              </p>
            </div>
          </div>
          <div
            className="bx--col-sm-4 bx--col-md-7 bx--col-lg-5"
            style={{ paddingRight: "3rem" }}
          >
            <div className="question">
              <h4>Isn't Airbnb already doing this?</h4>
              <p>
                Listing a property on Airbnb is an involved process that takes a
                number of steps. We offer a simpler and less formal process so
                that property owners can be connected with healthcare workers
                faster.
              </p>
            </div>
            <div className="question">
              <h4>Can I start this in another city?</h4>
              <p>
                Yes! Email housing4frontlinehealth&#64;gmail.com with "New FAQ"
                in the subject line, and we will help you get started. You only
                need know how to use email and Google Forms to act as a city
                coordinator.
              </p>
            </div>
          </div>
          <div className="bx--col-lg-1" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
