import {
  FavoriteFilled16,
  LogoFacebook16,
  LogoInstagram16,
  LogoTwitter16,
} from "@carbon/icons-react/es";

import React from "react";
import ReactHtmlParser from "react-html-parser";

const Footer = (props) => {
  const englishData = {
    volunteerText: "Created by volunteers with",
    socialMediaText: "Follow us on social media!",
  };
  const frenchData = {
    volunteerText: "Créer par des bénévoles avec",
    socialMediaText: "Suivez-nous sur les réseaux sociaux!",
  };
  let translatedData = props.language === "en" ? englishData : frenchData;
  return (
    <div className="bx--grid footer">
      <div className="bx--row section section__footer">
        <div className="bx--col-sm-4 bx--col-md-4 bx--offset-lg-1 bx--col-lg-5">
          <p>
            <span className="bold inline-icon">
              {translatedData.volunteerText}
              <FavoriteFilled16 />
            </span>
          </p>
          <p>{ReactHtmlParser(props.email)}</p>
        </div>
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6 social-media-container">
          <p>
            <span className="bold inline-icon">
              {translatedData.socialMediaText}
            </span>
          </p>
          <div className="social-media-links">
            <a
              href="https://www.facebook.com/healthworkerhousing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoFacebook16 />
            </a>
            <a
              href={`https://www.instagram.com/healthworkerhousing/?hl=${props.language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram16 />
            </a>
            <a
              href="https://twitter.com/hlthwrkrhousing?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoTwitter16 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
