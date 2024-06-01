// const h1 = React.createElement('h1', {id:"heading", xyz:"abc"}, "Hello from React"); // Using object we can send the id for the tag and also send any other attributes.
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(h1);

// console.log(h1); // The output of h1 is an object.
// // There will be props property in an object just as above which containing attributes and children. Attributes => id, xyz. children => "Hello from React".


// If we want the HTML structure like :-
/*
    <div class="parent">
        <div class="child">
            <h1></h1>
            <h2></h2>
        </div>
    </div>x
 */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id:"parent"}, 
    React.createElement("div", {id:"child"},
        [React.createElement("h1",{}, "Hello React World"),
         React.createElement("h2",{}, "Hello React World")]
    )
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
console.log(parent);