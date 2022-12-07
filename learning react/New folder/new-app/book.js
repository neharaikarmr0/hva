import React from "react";
import ReactDOM from "react-dom";

function Booklist() {
  return (
    <div>
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article>
      <Pic />
      <Author />
      <Title />
    </article>
  );
};

const image = () => {
  <img
    src="https://m.media-amazon.com/images/I/41NmiyLR0dL._SX327_BO1,204,203,200_.jpg"
    alt=""
  />;
};
const Author = () => {
  return <h4>Karan Bajaj</h4>;
};

const Title = () => {
  return <h2>The Freedom Manifesto</h2>;
};
ReactDom.render(<Booklist />, document.getElementById("root"));
