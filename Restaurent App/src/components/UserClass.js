
import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);

        // Creating State Variable
        // this.state = {
        //     count: 0
        // }

        // Creating State Variable
        this.state = {
            userInfo : {
                name: "Ankit Kumar",
                location: "Deafult",
                avatar_url: "Default"
            }
        }

        console.log("Constructor called");
    }

    async componentDidMount() {
        console.log("Component Did Mount Called");
        // This method is used to make API calls.

        const response = await fetch("https://api.github.com/users/Ankit-Kum-ar");
        const data = await response.json();

        this.setState({
            userInfo: data
        });

        console.log(data);
    }

    render() {
        const {contact} = this.props;
        console.log("Render has called");

        const {name,location, avatar_url} = this.state.userInfo;
        return (
            <div className="user">
                <img style={{height: "100px"}} src={avatar_url}/>
                <h3>Name : {name}</h3>
                <p>Contact : {contact}</p>
                <p>Location : {location}</p>
                <p>Email : ankitcode2511@gmail.com</p>      
            </div>
        );
    }
}

export default UserClass;