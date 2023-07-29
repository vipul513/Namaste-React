import { BiFoodTag } from "react-icons/Bi";
import { IMAGE_API } from "../fixtures/constant";

export const MenuCategory = ({ props }) => {
  return props.map((item) => (
    <div key={item.card.info.id} className="menu-card">
      <div className="menu-wrapper flex mx-2">
        <div className="item-details w-[85%]">
          <h4>
            {<BiFoodTag className={item.card.info.isVeg == 1 ? "text-green-600 mb-1" : "text-red-700 mb-1"} />}
          </h4>
          <h4>{item.card.info.name}</h4>
          <div className="item-price flex">
            <h3>₹</h3>
            {(item.card.info.defaultPrice / 100) | (item.card.info.price / 100)}
          </div>
          <p className="item-description text-sm">{item.card.info.description}</p>
        </div>
        <div className="item-img min-w-[8%] ml-2">
          {item.card.info.imageId ? (
            <img className="h-[100px] w-[100px]" alt="parantha" src={IMAGE_API + item.card.info.imageId}>
            </img>
          ) : null}
        </div>
      </div>
      <div className="item-gap my-4 border-2 border-solid border-gray-300 rounded-md">
      </div>
    </div>
  ));
};
