import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import "../../index.css";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
