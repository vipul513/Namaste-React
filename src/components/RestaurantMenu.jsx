import { Accordion } from "../utils/accordion/Accordion.jsx";
import ToggleSwitch from "../utils/toggleButton/ToggleSwitch.jsx";
import { MenuOfferCard } from "./MenuOfferCard";
import { MenuCategory } from "./MenuCategory.jsx";
import { AiFillStar } from "react-icons/Ai";
import { FiClock } from "react-icons/Fi";
import { TbCoinRupee } from "react-icons/Tb";
import { useEffect, useState } from "react";
import { MENU_API } from "../fixtures/constant.js";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const RestaurantMenu = () => {
  const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <h4> No data</h4>;
  console.log(resInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    city,
    totalRatingsString,
    avgRatingString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

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
      <div className="menu-details">
        <div className="restaurant">
          <h2 className="name"> {name} </h2>
          <h4>{cuisines}</h4>
          <h4> {locality + ", " + city} </h4>
          <h4> Notes </h4>
        </div>
        <div className="res-rating">
          <div className="rating">
            <AiFillStar />
            <h3> {avgRatingString} </h3>
          </div>
          <h3 className="rating-count"> {totalRatingsString} </h3>
        </div>
      </div>
      <div className="horizontal_dotted_line"></div>
      <div className="estimates">
        <div className="time">
          <FiClock />
          <h4> {sla.slaString} </h4>
        </div>
        <div className="cost">
          <TbCoinRupee />
          <h4>{costForTwoMessage}</h4>
        </div>
      </div>
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
