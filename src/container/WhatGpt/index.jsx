import React from "react";
import Feature from "../../components/Feature";
import "./what.css";

const WhatGpt = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature />
      </div>

      <div className="gpt3__whatgpt3-header">
        <h1 className="gradient__text">
          As possibilidades estão além da sua imaginação
        </h1>
        <p>Explore a biblioteca</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatGpt;
