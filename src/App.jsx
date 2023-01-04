import React from "react";
import "./App.css";
import { Cta, Brand, Navbar } from "./components";
import {
  Header,
  Features,
  Blog,
  Footer,
  Possibility,
  WhatGpt,
} from "./container";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
