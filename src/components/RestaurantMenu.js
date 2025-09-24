import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

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

  const restaurantCard = resInfo?.cards?.find((c) => c?.card?.card?.info);

  const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

  const itemCards = resInfo?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
      (c) => c?.card?.card?.itemCards || []
    );

  const menuSection = resInfo?.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = menuSection?.filter(
    (section) =>
      section?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h2 className="font-bold text-3xl my-10">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
