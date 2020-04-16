import { Link } from "react-router-dom";
import React from "react";

const Header = (props) => {
  return (
    <div className="bx--grid header">
      <div className="bx--row section section__header">
        <div className="bx--col-sm-3 bx--col-md-6 bx--offset-lg-1 bx--col-lg-5">
          <Link to={`/?lang=${props.language}`}>
            <h3>{props.pageTitle}</h3>
          </Link>
        </div>
        <div className="bx--col-sm-1 bx--col-md-2 bx--offset-lg-3 bx--col-lg-1">
          <div style={{ float: "right" }}>
            <Link to={`/faq?lang=${props.language}`}>
              <h3>FAQ</h3>
            </Link>
          </div>
        </div>
        <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-2" />
      </div>
    </div>
  );
};

export default Header;
