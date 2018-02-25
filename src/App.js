import React from "react";
import "./App.css";
import Scroller from "./Scroller";

const renderSection = ({ data, index, childProgress }) => {
  const style = {
    transform: `scale(${Math.max(childProgress, 0.2)})`,
    backgroundColor: `hsla(${70 * index}, 100%, 45%, 0.3)`
  };
  return (
    <div style={style} key={index}>
      {Math.round(childProgress * 1000)}
    </div>
  );
};

const lines = "united states of america".split(" ");

const App = () => (
  <Scroller
    containerClassName="container"
    backgroundClassName="background"
    scrollingPixelsPerSection={1000}
    sectionsData={lines}
    renderSection={renderSection}
  />
);

export default App;
