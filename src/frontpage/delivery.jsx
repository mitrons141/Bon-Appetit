import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Delivery = () => {
    const navigate = useNavigate();

    const handleToFront = () => {
        navigate("/front");
      };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <div className="mt-44 mb-44 w-auto max-w-[40rem] mx-auto border-2 rounded-tl-3xl rounded-br-3xl p-6 backdrop-blur-xl text-teal-300 shadow-xl">
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl font-bold mb-4 text-teal-200">
              Your is order confirmed and will be delivered shortly...
            </h2>
            <img src="/delivery.gif" className="rounded-full w-36 h-36" />
          </div>
            <button
            onClick={handleToFront}
              type="submit"
              className=" bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 mt-5 rounded-tr-lg rounded-bl-lg transition-colors duration-300 shadow-xl"
            >
              Thank You!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Delivery;
