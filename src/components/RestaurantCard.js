import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer w-60">
      <img
        className="w-full h-36 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-3">
        <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
          <span className="font-medium">⭐ {avgRating}</span>
          <span>{costForTwo}</span>
          <span>{sla?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
