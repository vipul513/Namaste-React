import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body render");
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

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
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
              (res) =>  res.data.avgRating > 3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
             <Link to = {"/restaurant/" + restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
              </Link>
          ))}
      </div>
    </div>
  );
};
