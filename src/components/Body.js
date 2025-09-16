import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // ✅ Extract restaurants from new API format
        const restaurants =
            json?.data?.cards?.find(
                (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];


        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search Restaurant"
                        className="search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurant);
                        }}
                        className="search-btn"
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
