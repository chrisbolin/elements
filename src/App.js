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

const Page = ({
  component,
  number,
  total,
  footer = null,
  footerClassName = ""
}) => {
  return (
    <div className="page">
      {createElement(component)}
      <div className="number">
        {padToTwo(number)} of {padToTwo(total)}
      </div>
      {footer && <div className={`footer ${footerClassName}`}>{footer}</div>}
    </div>
  );
};

const firstPiece = Contact11;
const lastPiece = Contact02;

const otherPieces = [
  Contact06,
  Contact13,
  Contact05,
  Contact07,
  Contact04,
  Contact01,
  Contact09,
  Contact10,
  Contact12,
  Contact15
];

const total = otherPieces.length + 2;

const App = () => (
  <div className="app">
    <Page
      component={firstPiece}
      number={1}
      total={total}
      footer="↓"
      footerClassName="first-footer"
    />
    <Cover />
    {otherPieces.map((page, index) => (
      <Page component={page} key={index} number={index + 2} total={total} />
    ))}
    <Page component={lastPiece} number={total} total={total} footer="(end)" />
  </div>
);

export default App;
