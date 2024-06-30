import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// Creating AppLayout in which all three components have come.
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        {/* <Footer/> */}
        </>
    )
}

// Rendering the react element to the root element.
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout/>);