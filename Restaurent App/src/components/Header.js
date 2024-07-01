import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                    <li id="Leftli">
                         <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    <li>
                        <Link className="link">Cart</Link>
                    </li>
                    <button className="login-btn" onClick={logValue}>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;