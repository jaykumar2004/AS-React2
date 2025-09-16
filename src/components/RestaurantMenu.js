import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=87869&catalog_qa=undefined&query=Burger&submitAction=ENTER"
        );

        const json = await data.json();
        console.log("API Response:", json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    // ✅ Find the card that actually has restaurant info
    const restaurantCard = resInfo?.cards?.find(
        (c) => c?.card?.card?.info
    );

    const name = restaurantCard?.card?.card?.info?.name;

    return (
        <div className="menu">
            <h2>{name}</h2>
            <h3>Menu</h3>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
                <li>Item5</li>
                <li>Item6</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
