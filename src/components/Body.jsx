import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { useRestaurants } from "../utils/hooks/useRestaurants";
import Shimmer from "../utils/Shimmer/Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const json = useRestaurants();
    json.then((res) => {
      const data = res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // Optional Chaining
      setListOfRestaurants(data);
      setFilteredRestaurant(data);
    });
  }, [json]);
  console.log(filteredRestaurant);
  if (filteredRestaurant === undefined || filteredRestaurant.length === 0) return <Shimmer />;

  return (
    <div className="w-auto mx-32">
      <div className="flex my-5">
        <div className="">
          <input
            type="text"
            className="border-2 border-black "
            placeholder=" Search "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="rounded-lg m-2 bg-cyan-600 px-2 py-1"
            onClick={() => {
              const filteredList = filteredRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          id="filter-btn"
          className="rounded-lg m-2 bg-cyan-600 px-2 py-1"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map(
          (restaurant) => (
            (
              <Link
                className="bg-cadetblue rounded-lg mx-3 my-5 h-[270px]"
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Body;
