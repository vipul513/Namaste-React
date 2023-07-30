import { LOGO_URL } from "../fixtures/constant";
export const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwo,
    sla,
  } = resData?.info;

  let resLogoURL = LOGO_URL + cloudinaryImageId;
  return (
    <div className="res-card w-[250px] shadow-sm">
      <div className="res-logo rounded-xl">
        <img className="rounded-xl" alt="JC Cafe" src={resLogoURL}></img>
      </div>
      <div className="res-details m-2">
        <h3 className="text-ellipsis overflow-hidden whitespace-nowrap font-bold"> {name} </h3>
        <h4> {"⭐️ " + avgRating} </h4>
        <h4 className="text-ellipsis overflow-hidden whitespace-nowrap text-sm text-gray-700"> {cuisines.join(", ")} </h4>
        <h4 className="text-sm text-gray-700">{areaName}</h4>
      </div>
    </div>
  );
};
