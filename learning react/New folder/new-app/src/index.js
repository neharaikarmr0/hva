// import React from "react";
// import ReactDom from "react-dom";

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//       <ul>
//         <li>
//           <a href="#">link 1</a>
//         </li>
//       </ul>
//     </>
//   );
// }

// const Person = () => <h3>Hello</h3>;
// const Message = () => {
//   return <p>i m neha</p>;
// };

//const Greeting = () => {
//  return React.createElement("div", {}, React.createElement("h3", {}, "hello"));
//};

import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/41NmiyLR0dL._SX327_BO1,204,203,200_.jpg",
  title: "The Freedom Manifesto",
  author: "Karan Bajaj",
};

const names = ["l", "k", "u"];
const display = names.map((n) => {
  return <h1>{n}</h1>;
});

function Booklist() {
  return <section className="book-box">{display}</section>;
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article>
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
