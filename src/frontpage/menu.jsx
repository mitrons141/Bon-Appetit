import React, { useState, useEffect } from "react";
import Bs from "./bs.jsx";
import FS from "./fs.jsx";
import Beverage from "./beverages.jsx";
import Pizza from "./pizza.jsx";
import Coffee from "./coffee.jsx";
import { useNavigate } from "react-router-dom";
import Sweet from "./sweet.jsx";

const Menu = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const [orderItems, setOrderItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const [orderCollapsed, setOrderCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleAddToOrder = (item) => {
    const updatedOrderItems = { ...orderItems };
    if (updatedOrderItems[item.id]) {
      updatedOrderItems[item.id].count += 1;
    } else {
      updatedOrderItems[item.id] = { ...item, count: 1, price: item.price };
    }
    setOrderItems(updatedOrderItems);
    console.log("Item added to order:", item);
  };

  useEffect(() => {
    let total = 0;
    Object.keys(orderItems).forEach((key) => {
      total += orderItems[key].price * orderItems[key].count;
    });
    setTotalPrice(total);
  }, [orderItems]);

  const handleRemoveFromOrder = (itemId) => {
    const updatedOrderItems = { ...orderItems };
    if (updatedOrderItems[itemId].count === 1) {
      delete updatedOrderItems[itemId];
    } else {
      updatedOrderItems[itemId].count -= 1;
    }
    setOrderItems(updatedOrderItems);
  };

  const handleConfirmOrder = () => {
    navigate("/order", { state: { orderItems, totalPrice } });
  };

  const handlespanClick = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleOrder = () => {
    setOrderCollapsed(!orderCollapsed);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="fixed mt-48 left-2 z-50 lg:hidden text-teal-900 bg-gray-100 p-1 border-2 border-teal-900 rounded-lg font-semibold">
        {collapsed ? <img src="./menu.gif" className="w-10 h-10"/> : <img src="./cross.gif" className="w-10 h-10"/>}
      </button>
      <aside
        id="default-sidebar"
        className={`absolute top-[20rem] left-6 z-40 w-48 h-[26.5rem] lg:block ${
          collapsed ? "hidden" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 black rounded-lg">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group hover:cursor-pointer">
                <img src="burger.gif" className="pl-1 h-10 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section1")}
                  className="ms-3"
                >
                  Burgers & Sandwiches
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group  hover:cursor-pointer">
                <img src="fries.gif" className=" w-10 h-9 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section2")}
                  className="ms-3"
                >
                  Fries & Sides
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group hover:cursor-pointer">
                <img src="beverage.gif" className="w-10 h-10 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section3")}
                  className="ms-3"
                >
                  Beverages
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group hover:cursor-pointer">
                <img src="pizza.gif" className="w-10 h-10 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section4")}
                  className="ms-4 "
                >
                  Pizzas
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group hover:cursor-pointer">
                <img src="coffee.gif" className="w-10 h-10 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section5")}
                  className="ms-3 "
                >
                  Coffees
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-teal-900 rounded-lg  hover:bg-teal-300 group hover:cursor-pointer">
                <img src="dessert.gif" className="w-10 h-10 rounded-xl"/>
                <span
                  onClick={() => handlespanClick("section6")}
                  className="ms-3 "
                >
                  Sweets & Treats
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {activeSection === "section1" && <Bs onAddToOrder={handleAddToOrder} />}
      {activeSection === "section2" && <FS onAddToOrder={handleAddToOrder} />}
      {activeSection === "section3" && (
        <Beverage onAddToOrder={handleAddToOrder} />
      )}
      {activeSection === "section4" && (
        <Pizza onAddToOrder={handleAddToOrder} />
      )}
      {activeSection === "section5" && (
        <Coffee onAddToOrder={handleAddToOrder} />
      )}
      {activeSection === "section6" && (
        <Sweet onAddToOrder={handleAddToOrder} />
      )}
      <button onClick={toggleOrder} className="fixed top-48 right-2 z-50 lg:hidden text-teal-900 bg-gray-100 p-1 border-2 border-teal-900 rounded-lg font-semibold">
        {orderCollapsed ? <img src="./order.gif" className="w-10 h-10"/> : <img src="./cross.gif" className="w-10 h-10"/>}
      </button>
      <div
        id="order"
        className=
        {`absolute top-[20rem] right-6 z-40 w-80 h-auto overflow-y-auto bg-gray-100 black rounded-lg lg:block ${
          orderCollapsed ? "hidden" : ""}`}
      >
        <h2 className="flex items-center justify-center text-lg font-bold mb-2 pt-3 pb-2 text-teal-900 underline">
        <div className="inline-flex justify-between w-44">
          <img src="./receipt.gif" className="w-8 h-8 rounded-md"/> Order Summary:
        </div>
        </h2>
        {Object.keys(orderItems).map((key) => (
          <div
            key={key}
            className="flex justify-between pl-6 pr-6 pb-3 text-teal-700"
          >
            <span>{orderItems[key].itemName}</span>
            <span>
              ₹{orderItems[key].price} x {orderItems[key].count}
            </span>
            <button
              type="button"
              className="border rounded-lg"
              onClick={() => handleRemoveFromOrder(key)}
            >
              <img src="./minus.gif" className="w-6 h-6 rounded-full"/>
            </button>{" "}
          </div>
        ))}
        <div className="">
          <span className="flex items-center justify-center">
            {" "}
            ----------------------------------{" "}
          </span>
          <h2 className="flex items-center justify-center text-lg font-bold mb-2">
            Total Price: ₹{totalPrice}
          </h2>
          <span className="flex items-center justify-center pb-3">
            {" "}
            ======================={" "}
          </span>
        </div>
        <div className="flex justify-center pb-2">
          {Object.keys(orderItems).length > 0 && (
            <button
              type="button"
              className="inline-flex justify-between bg-teal-500 hover:bg-teal-700 text-white font-bold w-44 py-2 px-4 rounded mt-3"
              onClick={handleConfirmOrder}
            >
              Confirm Order <img src="./okay.gif" className="w-6 h-6 rounded-full"/>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
