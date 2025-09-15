import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

        const [listOfRestaurants, setListOfRestaurants] = useState([]);

        useEffect(() => {
            fetchData();
        }, [])
        const fetchData = async () => {
            const data = await fetch(
                "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.77508727955646&lng=75.85139371454716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

            // Extract restaurant data properly
            const restaurants =
                json?.data?.cards?.find(
                    (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setListOfRestaurants(restaurants);
        };

        //conditional rendering
        if (listOfRestaurants.length === 0) return (
            <Shimmer/>
        )

        return (
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setListOfRestaurants(filteredList)
                        console.log(filteredList)
                    }}>Top Rated Restaurant
                    </button>
                </div>
                <div className="res-container">
                    {listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))}
                </div>
            </div>
        )
            ;
    }
;

export default Body;
