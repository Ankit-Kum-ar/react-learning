import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Create Restaurent Card Component
const RestaurentCard = (props) => {
    // console.log(props);
    const {name,cloudinaryImageId,locality,avgRating,costForTwo,id} = props.resData.info;
    return (
        <div className="restaurent-card">
            <img src={CDN_URL + cloudinaryImageId}/>
            <div className="restaurent-details">
                <h4>{name}</h4>
                <p>{locality}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
                <Link to={"/restaurent/"+id}><button>Order Now</button></Link>
            </div>
        </div>
    )
}

export default RestaurentCard;