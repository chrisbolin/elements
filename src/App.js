import React from "react";
import "./App.css";
import Scroller from "./Scroller";

const Page = ({ data, index, pageProgress }) => {
  const style = {
    transform: `scale(${Math.max(pageProgress, 0.9)})`
  };
  return (
    <div style={style} key={index} className="page">
      {data}
    </div>
  );
};

const addContainerProps = ({
  totalProgress,
  pagesProgress,
  activePageIndex,
  style,
  className
}) => {
  const activePageProgress = pagesProgress[activePageIndex];
  const opacity =
    activePageProgress > 0.6 ? 0 : 10 * (0.6 - activePageProgress);
  const overlay = `hsla(0, 0%, 0%, ${opacity})`;
  const background = `
    linear-gradient(${overlay},${overlay}),
    url("./img${activePageIndex}.jpeg")
  `;
  return {
    style: { ...style, background }
  };
};

const lines = "space: the final frontier".split(" ");

const App = () => (
  <Scroller
    containerClassName="container"
    pagesData={lines}
    renderPage={Page}
    addContainerProps={addContainerProps}
  />
);

export default App;
