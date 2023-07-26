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

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP`
    );
    const json = await data.json();
    console.log(json?.data?.cards[5]?.card?.card?.gridElements);
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements.infoWithStyle.restaurants);
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
              (res) =>  res.info.avgRating > 3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
              console.log(restaurant.info.id),
             <Link key={restaurant.info.id} to = {"/restaurant/" + restaurant.info.id}>
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              </Link>
          ))}
      </div>
    </div>
  );
};
