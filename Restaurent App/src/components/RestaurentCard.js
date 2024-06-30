import { CDN_URL } from "../utils/constants";

// Create Restaurent Card Component
const RestaurentCard = (props) => {
    // console.log(props);
    const {name,cloudinaryImageId,locality,avgRating,costForTwo} = props.resData.info;
    return (
        <div className="restaurent-card">
            <img src={CDN_URL + cloudinaryImageId}/>
            <div className="restaurent-details">
                <h4>{name}</h4>
                <p>{locality}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
                <button>Order Now</button>
            </div>
        </div>
    )
}

export default RestaurentCard;