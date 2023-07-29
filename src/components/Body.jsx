import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { useRestaurants } from "../utils/hooks/useRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const json = useRestaurants();
    json.then((res) => {
      const data = res?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants
      // Optional Chaining
      setListOfRestaurants(data);
      setFilteredRestaurant(data);
    });
  }, [json]);

  if (filteredRestaurant === undefined) return <h4>No data</h4>;

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="serach-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="btn"
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
          className="btn"
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
      <div className="res-container">
        {filteredRestaurant.map(
          (restaurant) => (
            (
              <Link
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
