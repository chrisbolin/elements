import React from "react";
import "./App.css";
import Scroller from "./Scroller";

const Page = ({ data, index, progress }) => {
  const style = {
    transform: `scale(${Math.max(progress, 0.2)})`,
    backgroundColor: `hsla(${70 * index}, 100%, 45%, 0.3)`
  };
  return (
    <div style={style} key={index}>
      {Math.round(progress * 1000)}
    </div>
  );
};

const lines = "united states of america".split(" ");

const App = () => (
  <Scroller
    containerClassName="container"
    backgroundClassName="background"
    scrollingPixelsPerPage={1000}
    pagesData={lines}
    renderPage={Page}
  />
);

export default App;
