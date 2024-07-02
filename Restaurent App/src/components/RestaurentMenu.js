import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import { Error } from "./Error";

export const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const {resId} = useParams();
    // console.log(params); // It return resId
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch(MENU_URL+resId);
        const data = await response.json();
        console.log(data);
        setResInfo(data?.data?.cards[2]?.card?.card?.info); 
        setMenuItems(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card);   
        console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card);
    }

    // For initial values of resInfo
    if(resInfo === null || menuItems.length === 0) return <Shimmer/>

    // De-structuring 
    const {name,avgRating,cuisines,totalRatingsString,costForTwoMessage,id} = resInfo;
    const {message} = resInfo?.feeDetails;
    const {itemCards} = menuItems;

    if(itemCards === undefined) return <Error/>
    // console.log(title);
    // if(itemsCards.length == 0) console.log("false");
    console.log(menuItems);
    return ( 
        <div className="menu" id={id}>  
            <h2>{name}</h2>
            <div className="box-card">
                <p>⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
                <p> {cuisines.join(",")} </p>
                <p>{message}</p>                
            </div>
            <h3 className="menu-heading">Menu</h3>
            <div className="menu-items">
                {
                    itemCards.map((item)=>{
                        return (
                            <div className="item" key={item.card.info.id}>
                                <p>-- {item.card.info.name} - Rs {item.card.info.price / 10}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}