import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import cycle from "../assets/Bcyle.jpeg";
import { RestaurentCategory } from "./RestaurentCategory";

export const RestaurentMenu = () => {
    const {resId} = useParams();
    const [resInfo, categories] = useRestaurentMenu(resId); // Work through Custom Hook.

    const [showIndex, setShowIndex] = useState(null);
    const handleAccordionClick = (index) => {
        if (showIndex === index) {
          setShowIndex(null); // Collapse if the same index is clicked
        } else {
          setShowIndex(index); // Open the new index
        }
      };

    // For initial values of resInfo
    if(resInfo === null) return <Shimmer/>

    // De-structuring 
    const {name,avgRating,cuisines,totalRatingsString,costForTwoMessage,id, areaName} = resInfo;
    const {slaString} = resInfo?.sla;
    const {message} = resInfo?.feeDetails;

    return ( 
        <div className=" ml-56 mt-14 " id={id}>  
            <h1 className="mr-72 font-bold text-2xl mb-7">{name}</h1>
            <div className="border-2 mr-72 rounded-2xl shadow-2xl bg-zinc-900 shadow-gray-800 p-4 mb-16">
                <p className="font-bold pb-1">⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
                <p className="ml-2 text-sm text-yellow-300 pb-2 "> {cuisines.join(", ")} </p>
                <div className="flex mb-3">
                    <GoDotFill className="mt-1"/>
                    <p className="font-semibold mr-2">&nbsp;&nbsp;Outlet </p> 
                    <p>&nbsp;&nbsp;{areaName}</p>
                </div>        
                <div className="flex">
                    <GoDotFill className="mt-1"/>
                    <p className="text-base ml-2">{slaString}</p>
                </div>
                <div className="mt-5 flex" >
                    <img className="w-6 h-6 mr-3 rounded-lg" src={cycle}/>
                    <p className="">{message}</p>    
                </div>                
            </div>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurentCategory
                 key={category?.card?.card?.title}
                  data={category?.card?.card} 
                  showItems={index === showIndex ? true : false}
                    setShowIndex={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    );
}