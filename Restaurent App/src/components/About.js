import User from "./User"
import UserClass from "./UserClass"

export const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is a simple Restaurent App created using React.</p>
            <User name="Ankit Kumar (Function)"/>
            <UserClass name="Ankit Kumar (Class)" contact="Ankit-Kum-ar (Class)"/>
        </div>
        
    )
}