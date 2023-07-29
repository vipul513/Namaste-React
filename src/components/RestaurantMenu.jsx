import { Accordion } from "../utils/accordion/Accordion.jsx";
import ToggleSwitch from "../utils/toggleButton/ToggleSwitch.jsx";
import { MenuOfferCard } from "./MenuOfferCard";
import { MenuCategory } from "./MenuCategory.jsx";
import { useParams } from "react-router-dom";
import { RestaurantDetails } from "./RestaurantDetails.jsx";
import useRestaurantsMenu from "../utils/hooks/useRestaurantMenu.js";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) return <h4> No data</h4>;
  console.log(resInfo?.cards[1]?.card?.card?.gridElements)
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
    <div className="res-menu">
      <RestaurantDetails data={resInfo?.cards[0]?.card?.card?.info} />

      <div className="offers">
        {offerCards.map((offer) => (
          <MenuOfferCard key={offer.info.offerIds[0]} props={offer} />
        ))}
      </div>

      <div className="food-preference">
        <ToggleSwitch label="Veg Only" />
      </div>

      <div className="menu-items">
        {categories.map((cat, index) => (
          <Accordion
            key={index}
            title={cat.card.card.title}
            content={<MenuCategory props={cat.card.card.itemCards} />}
          />
        ))}
      </div>

    </div>
  );
};
