import React, { createElement } from "react";
import "./App.css";
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
];

const App = () => (
  <div>
    {pages.map((page, index) => (
      <Page
        component={page}
        key={index}
        number={index + 1}
        total={pages.length}
      />
    ))}
  </div>
);

export default App;
