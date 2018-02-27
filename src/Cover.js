import React from "react";

const Link = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const Cover = () => (
  <div className="cover">
    <div className="title">elements</div>
    <div className="text body">
      Elements is a digital art series which aims to capture the beauty in
      simple interactions. ■ These pieces are neither images nor renderings.
      They are just a handful of elements (using two simple building blocks of
      the web, html and css). ■ Elements was created for the inaugural issue of{" "}
      <Link href="https://thedisconnect.co/one/">The Disconnect</Link>.
    </div>
    <div className="text footnote">
      <Link href="https://chris.bolin.co">Chris Bolin</Link>, 2018
    </div>
  </div>
);

export default Cover;
