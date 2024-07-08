import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Create Header Component
const Header = () => {
    // Creating a state variable using useState() hook.
    const [btnValue, setBtnValue] = useState("Login");
    const logValue = () => {
        if (btnValue === "Login") {
            setBtnValue("Logout");
        } else {
            setBtnValue("Login");
        }
    }

    return (
        <div className="flex justify-between border border-solid border-orange-200 mb-5 mt-1 shadow-2xl">
            <img className="w-40 h-20 ml-5 rounded-full" src={LOGO_URL} />
            <div className="">
                <ul className="flex p-4 mt-3">
                    <li className="mr-9">
                         <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    <li className="mr-9">
                        <Link to="/grocery" className="link">Grocery</Link>
                    </li>
                    <li className="mr-9">
                        <Link className="link">Cart</Link>
                    </li>
                    <button className="mr-9" onClick={logValue}>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;