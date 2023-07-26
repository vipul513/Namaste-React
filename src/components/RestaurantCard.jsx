import { LOGO_URL } from "../fixtures/constant";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;
  let resLogoURL = LOGO_URL + cloudinaryImageId;
  return (
    <div className="res-card">
      <div className="res-logo">
        <img alt="JC Cafe" src={resLogoURL}></img>
      </div>
      <div className="res-details">
        <h3 className="res-name"> {name} </h3>
        <h4> {"⭐️ " + avgRating} </h4>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {costForTwo } </h4>
        <h4> {"Estimate Time:- " + sla.slaString} </h4>
      </div>
    </div>
  );
};
