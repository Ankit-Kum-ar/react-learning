// Creating a custom hook to fetch the data about resInfo and menuItems from API.

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch(MENU_URL+resId);
        const data = await response.json();
        setResInfo(data?.data?.cards[2]?.card?.card?.info);   

        // Extract those Objects from Array who have category of restaurent dishes.
        const category = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (e) => e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        console.log(category);
        setCategories(category);
    }

    
    return [resInfo, categories];
}

export default useRestaurentMenu;