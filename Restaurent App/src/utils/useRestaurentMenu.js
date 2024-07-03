// Creating a custom hook to fetch the data about resInfo and menuItems from API.

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const response = await fetch(MENU_URL+resId);
        const data = await response.json();
        setResInfo(data?.data?.cards[2]?.card?.card?.info); 
        setMenuItems(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card);   
    }
    return [resInfo, menuItems];
}

export default useRestaurentMenu;