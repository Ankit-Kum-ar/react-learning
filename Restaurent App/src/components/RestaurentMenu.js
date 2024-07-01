import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=691733&catalog_qa=undefined&submitAction=ENTER");
        const data = await response.json();
        console.log(data);
        setResInfo(data?.data?.cards[2]?.card?.card?.info);    
    }

    // For initial values of resInfo
    if(resInfo === null) return <Shimmer/>

    // De-structuring 
    const {name,avgRating,cuisines,totalRatingsString,costForTwoMessage,id} = resInfo;
    const {message} = resInfo?.feeDetails;
    return ( 
        <div className="menu" id={id}>  
            <h2>{name}</h2>
            {/* <h5>⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</h5>
            <h3>Cuisines</h3>
            {
                cuisines.map((cus)=>{
                    return <li>{cus}</li>
                })
            } */}
            <div className="box-card">
                <h5>⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</h5>
                <h6>{cuisines.join(",")}</h6>
                <h5>{message}</h5>
            </div>
        </div>
    )
}