import { AiFillStar } from "react-icons/Ai";
import { FiClock } from "react-icons/Fi";
import { TbCoinRupee } from "react-icons/Tb";

export const RestaurantDetails = (props) => {
  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    city,
    totalRatingsString,
    avgRatingString,
    sla,
  } = props.data;

  return (
    <>
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
    </>
  );
};
