import { useContext } from "react"
import { UserContext } from "../utils/UserContext"

export const Contact = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <h1>Contact Us {loggedInUser}</h1>
            <p>For any queries, please contact us at: 9999666707</p>
        </div>
    )
}