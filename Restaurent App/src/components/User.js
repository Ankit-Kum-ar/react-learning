import {useState} from "react";
const User = (props) => {
    const {name} = props;
    return (
        <div className="user">
            <h3>Name : {name}</h3>
            <p>Contact : Ankit-Kum-ar</p>
            <p>Email : ankitcode2511@gmail.com</p>
        </div>
    )
}

export default User;