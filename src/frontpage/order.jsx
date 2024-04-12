import "./Order.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";

const Order = () => {
  const location = useLocation();
  const { orderItems, totalPrice } = location.state ?? {
    orderItems: {},
    totalPrice: 0,
  };
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/front");
  };

  const handleToPay = () => {
    navigate("/payment");
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 container mx-auto mt-10 mb-4">
          <h1 className="pl-2 text-3xl font-bold text-teal-400 bg-gray-100 w-64 rounded-t-lg">
            <div className="inline-flex items-center justify-between w-56 font-outline-2 p-2">
              <img src="./register.gif" className="w-12 h-12 rounded-md" />
              Your Order
            </div>
          </h1>
          <div className="bg-gray-100 p-5 rounded-b-lg rounded-tr-lg">
            <h2 className="text-xl font-bold mb-3">Order Summary:</h2>
            {Object.keys(orderItems).map((key) => (
              <div key={key} className="flex justify-between mb-2">
                <span>{orderItems[key].itemName}</span>
                <span className="font-semibold">
                  ₹{orderItems[key].price} x {orderItems[key].count} = ₹
                  {orderItems[key].price * orderItems[key].count}
                </span>
              </div>
            ))}
            <hr className="my-3" />
            <div className="flex justify-between">
              <span className="font-bold">Total Price:</span>
              <span className="font-semibold">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between mt-5">
              <button
                className="inline-flex items-center justify-between bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded w-56"
                onClick={handleBackToHome}
              >
                <img src="./right.gif" className="w-8 h-8 rounded-full" /> 
                Back to Order
              </button>
              <button className="inline-flex items-center justify-between bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded w-56"
              onClick={handleToPay}
              >
                Proceed to Payment{" "}
                <img src="./left.gif" className="w-8 h-8 rounded-full" />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Order;
