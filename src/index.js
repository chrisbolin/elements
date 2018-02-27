import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

window.generateStaticSite = () => {
  const head = document.head.outerHTML;
  const body = document.body.outerHTML.replace(/<script.*<\/script>/, "");
  return `<!DOCTYPE html>
<html lang="en">
${head}
${body}
<script type="text/javascript">console.log('👻')</script>
</html>`;
};
