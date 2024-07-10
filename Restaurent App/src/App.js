import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurentMenu } from "./components/RestaurentMenu";
import { Shimmer } from "./components/Shimmer";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
// import { Shimmer } from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));


// Creating AppLayout in which all three components have come.
const AppLayout = () => {
    const [userName, setUserName] = useState("");
    // Making API call for authentication and changed the UserContext data.
    useEffect(() => {
        // Api Call for the auth.
        const data = {
            name: "Ankit Kumar",
        }
        setUserName(data.name);
    }, []);
    return (
        <Provider store={appStore}>     
            <UserContext.Provider value={{loggedInUser : userName}}>
                <div>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}   

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurent/:resId",
                element : <RestaurentMenu/>
            },
            {
                path : "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path : "/cart",
                element: <Cart/>
            } 
        ],
        errorElement: <Error/>
    }
   
])

// Rendering the react element to the root element.
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);