import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="jumbotron jumobotron-fluid bg-dark text-white text-center">
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Hero;
