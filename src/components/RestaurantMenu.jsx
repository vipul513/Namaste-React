import ToggleSwitch from "../utils/toggleButton/ToggleSwitch.jsx";
import { MenuOfferCard } from "./MenuOfferCard";
import { useParams } from "react-router-dom";
import { RestaurantDetails } from "./RestaurantDetails.jsx";
import useRestaurantsMenu from "../utils/hooks/useRestaurantMenu.js";
import {MenuCategory} from "./MenuCategory"

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) return <h4> No data</h4>;
  const offerCards =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-menu bg-white w-[800px] mx-auto pl-1">
      <RestaurantDetails data={resInfo?.cards[0]?.card?.card?.info} />

      <div className="offers flex mt-4 overflow-auto">
        {offerCards.map((offer) => (
          <MenuOfferCard key={offer.info.offerIds[0]} props={offer} />
        ))}
      </div>

      <div className="food-preference mt-10 pb-5 pl-2 border-b-2 border-solid border-gray-200 text-sm font-bold">
        <ToggleSwitch label="Veg Only" />
      </div>

      <div className="menu-items mt-5 pb-1 pr-1">
        {categories.map((cat, index) => (
          <MenuCategory className="mb-1" key={index} menu={cat.card.card}/>
        ))}
      </div>

    </div>
  );
};
