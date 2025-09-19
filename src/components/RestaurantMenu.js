import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  // if (resInfo === null) return <Shimmer />;

  // // ✅ Find the card that actually has restaurant info
  // const restaurantCard = resInfo?.cards?.find(
  //     (c) => c?.card?.card?.info
  // );

  // const name = restaurantCard?.card?.card?.info?.name;

  const restaurantCard = resInfo?.cards?.find((c) => c?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  const itemCards = resInfo?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
      (c) => c?.card?.card?.itemCards || []
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={item.card.info.id + "-" + index}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
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
