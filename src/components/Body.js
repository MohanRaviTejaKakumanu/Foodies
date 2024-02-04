import Rescard from "./Rescard.js";
import { useState } from "react";
import resList from "../utils/mockData.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="Res-container">
        {listOfRestaurant.map((restaurant) => (
          <Rescard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
