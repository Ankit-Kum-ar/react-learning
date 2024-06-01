import React from "react";
import ReactDOM from "react-dom/client";

// Creating react element 
const parent = React.createElement("h1", {id:"parent"}, "Hello React App");

// Creating react element using JSX.
const jsxParent = <h1 id="parent">Hello React App</h1>;

// Rendering the react element to the root element.
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(jsxParent);

// Printing the react element.
console.log(parent);
console.log(jsxParent);