import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

// Create Header Component
const Header = () => {

    console.log("Header componenet");

    // Creating a state variable using useState() hook.
    const [btnValue, setBtnValue] = useState("Login");
    const logValue = () => {
        if (btnValue === "Login") {
            setBtnValue("Logout");
        } else {
            setBtnValue("Login");
        }
    }

    useEffect(() => {
        console.log("useEffect");
    }, []);

    return (
        <div className="Header">
            <img className="Logo" src={LOGO_URL} />
            <div className="nav-items">
                <ul>
                    <li id="Leftli">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={logValue}>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;