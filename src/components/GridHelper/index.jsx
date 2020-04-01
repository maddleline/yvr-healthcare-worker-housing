import "./GridHelper.scss";

// Packages
import React from "react";

class GridHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler(e) {
    if (e.keyCode === 71 && e.ctrlKey) {
      this.setState((oldState) => {
        return { isVisible: !oldState.isVisible };
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler, false);
  }

  render() {
    return (
      <div
        className={`grid-helper ${this.state.isVisible ? " isVisible" : ""}`}
      >
        <div className="bx--grid">
          <div className="bx--row">
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
            <div className="grid-helper__col bx--col-sm-1 bx--col-md-1 bx--col-lg-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default GridHelper;
