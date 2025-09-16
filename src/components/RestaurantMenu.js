import {useEffect} from "react";

const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.77508727955646&lng=75.85139371454716&restaurantId=593447&catalog_qa=undefined&query=Pizza&submitAction=ENTER")

        const json = await data.json();
        console.log(json);
    }

    return (
        <h1 className="menu">
            <h2>Name of the Restaurant</h2>
            <h3>Menu</h3>
            <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
                <li>Item5</li>
                <li>Item6</li>
            </ul>
        </h1>
    )
}
export default RestaurantMenu