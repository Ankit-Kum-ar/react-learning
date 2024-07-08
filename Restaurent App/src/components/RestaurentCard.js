import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Create Restaurent Card Component
const RestaurentCard = (props) => {
    // console.log(props);
    const {name,cloudinaryImageId,locality,avgRating,costForTwo,id} = props.resData.info;
    return (
        <div className="m-2 p-4 w-60 mr-14">
            <img className="rounded-xl" src={CDN_URL + cloudinaryImageId}/>
            <div className="restaurent-details">
                <h4 className="py-1 font-bold text-lg">{name}</h4>
                <p>{locality}</p>
                <p className="flex"><FaStar className="mt-1 mr-2"/> {avgRating}</p>
                <p>{costForTwo}</p> 
                <Link to={"/restaurent/"+id}><button className="mt-2 bg-gray-600 px-1 rounded-md hover:bg-slate-800">Order Now</button></Link>
            </div>
        </div>
    )
}

// Higher Order Component
// Input of HOC --> Restaurent Card Componenet
// Output of HOC --> Restaurent Card Component Promoted

export const withPromotedLabel = (RestaurentCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black mt-5 ml-3 p-1 rounded-lg shadow-sm shadow-slate-500">Promoted</label>
                {/* ... => Spread operator that pass all the props that we received */}
                <RestaurentCard {...props}/> 
            </div>
        )
    }
}

export default RestaurentCard;