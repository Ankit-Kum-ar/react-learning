import React from "react";
import ReactDOM from "react-dom/client";

// Creating react element 
const parent = React.createElement("h1", {id:"parent"}, "Hello React App");

// Creating react element using JSX.
// const jsxParent = (<h1 className="parent">Hello React App</h1>);

// Creating react functional component
const Title = () => (
    <h1>Title</h1>
)


const num = 10000;

// Creating react functional component
// Component Compositon => Render another component into another component.
// To render react component, we use same technique of {} brackets for JS code.
// Render parent React component
const Heading = () => {
    return (
        <>
        <Title/>
        <h2>{num}</h2>
        <h3 className="heading">Hello React App</h3>
        {parent}
        </>
    )
}

// Rendering the react element to the root element.
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Heading/>);

// Printing the react element.
console.log(parent);
console.log(Heading);