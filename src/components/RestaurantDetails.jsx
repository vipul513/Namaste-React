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
      <div className="menu-details flex justify-between py-3 border-b-2 border-dashed border-gray-300">
        <div className="restaurant m-2">
          <h2 className="name"> {name} </h2>
          <h4>{cuisines}</h4>
          <h4> {locality + ", " + city} </h4>
          <h4> Notes </h4>
        </div>
        <div className="res-rating mr-8 mt-5 border-2 border-solid border-gray-300 h-20 rounded-md">
          <div className="rating flex items-center mb-1 p-2 border-b-2 border-dashed border-gray-300">
            <AiFillStar className="text-green-600 m-1" />
            <h6> {avgRatingString} </h6>
          </div>
          <h3 className="rating-count text-xs"> {totalRatingsString} </h3>
        </div>
      </div>

      <div className="estimates flex items-center  mx-1 my-1">
        <div className="time flex items-center mr-3">
          <FiClock className="mx-1" />
          <h4> {sla.slaString} </h4>
        </div>
        <div className="cost flex items-center">
          <TbCoinRupee className="mx-1" />
          <h4>{costForTwoMessage}</h4>
        </div>
      </div>
    </>
  );
};
