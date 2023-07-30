import { useState } from "react";
import { MenuItems } from "./MenuItems";

export const MenuCategory = (props) => {
  const { menu } = props;
  const [showItems, setShowItems] = useState(false);
  return (
    <div className="pb-1">
      <div
        className="menu-category flex justify-between bg-gray-300 mb-3 p-2 shadow-md rounded-md"
        onClick={() => setShowItems(!showItems)}
      >
        <span className="text-sm font-bold">
          {menu.title} ({menu.itemCards.length})
        </span>
        <span className="mr-2"> {showItems ? "🔼" : "🔽"}</span>
      </div>
      <div className="menu-item">
            {showItems && <MenuItems items={menu.itemCards} />}
      </div>
    </div>
  );
};

export default MenuCategory;
