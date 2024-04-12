import React, { useEffect, useState } from "react";
import sweetsData from "./sweet.js";

const Sweet = ({ onAddToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(sweetsData);
  }, []);

  const handleAddToOrder = (item) => {
    if (onAddToOrder) {
      onAddToOrder(item);
    }
  };

  return (
    <main className="flex items-center justify-center pb-8">
      <div className="grid gap-8 lg:grid-cols-3 mt-48 md:grid-cols-2 sm:grid-cols-1">
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-3 backdrop-blur-md">
            <img
              src={item.imgSrc}
              className="rounded-lg w-60"
              alt={item.itemName}
            />
            <ul className="w-[14rem] text-white">
              <li className="p-2 pl-4 pt-3 font-bold">{item.itemName}</li>
              <li className="p-2 pl-4">{item.cal}</li>
              <li className="flex p-2 pl-4 pt-10">
                <span className="flex-1">₹{item.price}</span>
                <button
                  type="button"
                  className="inline-flex items-center justify-between border rounded-lg text-teal-900 bg-gray-100 w-16 p-1"
                  onClick={() => handleAddToOrder(item)}
                >
                  Add <img src="./plus.gif" className="w-4 h-4 rounded-full"/>
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Sweet;
