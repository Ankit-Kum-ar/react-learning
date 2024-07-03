import RestaurentCard from "./RestaurentCard";
import {useEffect, useState} from "react";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

// Create Body Component
const Body = () => {

    // Creating a state variable using useState() hook.
    const [listCards, setListCards] = useState([]);
    const [filterCards, setFilterCards] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        console.log(data);

        // Set the listCards state variable with the data fetched from the API.
        // Optional Chaining
        setListCards(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // Set the filterCards state variable with the data fetched from the API.
        setFilterCards(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Check internet Connectivity...
    const internetStatus = useOnlineStatus();
    if(!internetStatus) return <h1>Internet is not connected</h1>;

    // Search onClick() method...
    const searchButton = () => {
        const cardListFiltered = listCards.filter(
            (res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        console.log(cardListFiltered);  
        setFilterCards(cardListFiltered);
    }
    // setListCards(listCards);


    return listCards.length == 0 ? (<Shimmer/>) : (
        <div className="Body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <button className="search-btn" onClick={searchButton}>Search</button>
                </div>

                <button 
                    className="filter-btn"
                    onClick={() => {
                        // filter logic
                        const cardListFiltered = listCards.filter((res) => res.info.avgRating >= 4.4);
                        console.log(cardListFiltered);
                        setFilterCards(cardListFiltered);
                    }}
                >
                    Top Rated Restaurent
                </button>
            </div>
            <div className="restaurent-container">
                {/* Apply map to the cardlist Array */}
                {filterCards.map((res)=>{
                    return <RestaurentCard key = {res.info.id} resData = {res}/>
                })}
            </div>
        </div>
    )
}

export default Body;