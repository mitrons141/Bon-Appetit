import React, { useState, useEffect } from "react";
import bsData from "./bs.js";

const Bs = ({ onAddToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(bsData);
  }, []);

  const handleAddToOrder = (item) => {
    if (onAddToOrder) {
      onAddToOrder(item);
    }
  };

  return (
    <main className="flex items-center justify-center  pb-8 relative">
      <div className="grid gap-8 mt-56 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-3 backdrop-blur-md">
            <img
              src={item.imgSrc}
              className="rounded-lg w-60"
              alt={item.itemName}
            />
            <ul className="w-[14rem] text-white">
              <li className="p-2 pl-4 pt-3 font-bold">{item.itemName}</li>
              <li className="p-2 pl-4">{item.desc}</li>
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

export default Bs;
