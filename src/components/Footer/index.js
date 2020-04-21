import { FavoriteFilled16 } from "@carbon/icons-react/es";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const Footer = (props) => {
  return (
    <div className="bx--grid footer">
      <div className="bx--row section section__footer">
        <div className="bx--col-sm-3 bx--col-md-6 bx--offset-lg-1 bx--col-lg-5">
          <p>
            <span className="bold inline-icon">
              {props.text}
              <FavoriteFilled16 />
            </span>
          </p>
          <p>{ReactHtmlParser(props.email)}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
