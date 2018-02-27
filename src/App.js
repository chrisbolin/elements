import React, { createElement } from "react";
import {
  Contact01,
  Contact02,
  Contact04,
  Contact05,
  Contact06,
  Contact07,
  Contact09,
  Contact10,
  Contact11,
  Contact12,
  Contact13,
  Contact15
} from "./contact";
import Cover from "./Cover";

const padToTwo = n => (n < 10 ? `0${n}` : n);

const Page = ({ component, number, total }) => {
  return (
    <div className="page">
      {createElement(component)}
      <div className="number">
        {padToTwo(number)} of {padToTwo(total)}
      </div>
    </div>
  );
};

const pages = [
  Contact01,
  Contact13,
  Contact05,
  Contact06,
  Contact07,
  Contact04,
  Contact09,
  Contact10,
  Contact12,
  Contact15,
  Contact02
];

const total = pages.length + 1;

const App = () => (
  <div className="app">
    <Page component={Contact11} number={1} total={total} />
    <Cover />
    {pages.map((page, index) => (
      <Page component={page} key={index} number={index + 2} total={total} />
    ))}
  </div>
);

export default App;
