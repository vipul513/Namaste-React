import { BiFoodTag } from "react-icons/Bi";
import { IMAGE_API } from "../fixtures/constant";

export const MenuItems = ({ items }) => {
  return items.map((item) => (
    <div key={item.card.info.id} className="menu-card shadow-lg">
      <div className="menu-wrapper flex mx-2">
        <div className="item-details w-[85%] space-y-1">
          <h4>
            {
              <BiFoodTag
                className={
                  item.card.info.isVeg == 1
                    ? "text-green-600 mb-1"
                    : "text-red-700 mb-1"
                }
              />
            }
          </h4>
          <h4 className="text-sm font-bold">{item.card.info.name}</h4>
          <div className="item-price text-sm text-gray-700 flex">
            <h3>₹</h3>
            {(item.card.info.defaultPrice / 100) | (item.card.info.price / 100)}
          </div>
          <p className="item-description text-sm">
            {item.card.info.description}
          </p>
        </div>
        <div className="item-img min-w-[8%] ml-2 relative">
          {item.card.info.imageId ? (
            <img
              className="h-[100px] w-[100px]"
              alt={item.card.info.name}
              src={IMAGE_API + item.card.info.imageId}
            ></img>
          ) : null}
          {item.card.info.imageId ? (
            <button className="bg-white absolute top-[73px] left-3 text-green-800 text-sm font-bold border-[1px] px-4 py-1 border-gray-700 rounded-sm hover:bg-green-800 hover:text-white">
              Add +
            </button>
          ) : (
            <button className="bg-white text-green-800 text-sm font-bold border-[1px] px-4 py-1 mt-5 border-gray-700 rounded-sm hover:bg-green-800 hover:text-white">
              Add +
            </button>
          )}
        </div>
      </div>
      <div className="item-gap my-4 border-2 border-solid border-gray-300 rounded-md"></div>
    </div>
  ));
};
