import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h3>Hello</h3>;
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
