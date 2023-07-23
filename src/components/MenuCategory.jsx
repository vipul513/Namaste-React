import { BiFoodTag } from "react-icons/Bi";
import { IMAGE_API } from "../fixtures/constant";

export const MenuCategory = ({ props }) => {
  return props.map((item) => (
    <div key={item.card.info.id} className="menu-card">
      <div className="menu-wrapper">
        <div className="item-details">
          <h4>
            {<BiFoodTag className={item.card.info.isVeg ? "veg" : "non-veg"} />}
          </h4>
          <h4>{item.card.info.name}</h4>
          <div className="item-price">
            <h3>₹</h3>
            {(item.card.info.defaultPrice / 100) | (item.card.info.price / 100)}
          </div>
          <p className="item-description">{item.card.info.description}</p>
        </div>
        <div className="item-img">
          {item.card.info.imageId ? (
            <img alt="parantha" src={IMAGE_API + item.card.info.imageId}>
            </img>
          ) : null}
        </div>
      </div>
      <div className="item-gap"></div>
    </div>
  ));
};
