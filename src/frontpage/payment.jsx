import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import cardImage from "/card.png";
import lockImage from "/lock.png"

const PaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!/^\d{12}$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must be 12 digits";
    }
    if (!/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 digits";
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      errors.expiry = "Expiry date is required";
    } else {
      const currentYear = new Date().getFullYear();
      const expiryYear = parseInt(formData.expiryYear, 10);
      if (expiryYear < currentYear) {
        errors.expiry = "Expiry year must be the current year or later";
      }
    }
    return errors;
  };

  const handleToMerchant = () => {
    navigate("/order");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      navigate("/delivery");
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 mt-36 mb-44 max-w-96 mx-auto border-2 rounded-tl-3xl rounded-br-3xl pb-8 pl-8 pr-8 backdrop-blur-xl text-teal-300 shadow-xl">
          <div className="bg-teal-500 -ml-8 -mr-8 mb-6 rounded-tl-3xl p-4">
            <button className="text-black" onClick={handleToMerchant}>
              <div className="inline-flex items-center justify-between w-80">
                <div className="inline-flex items-center justify-between gap-3 text-teal-100">
                  <img src="/left.png" className="w-6 h-6" />
                  Merchant
                </div>
                <img src="/bag.png" className="w-8 h-8" />
              </div>
            </button>
          </div>
          <div className="inline-flex items-center justify-between w-72">
            <img
              src="/Mastercard.jpg"
              className="absolute top-[78px] left-1 w-22 h-16 -z-10"
            />
            <h2 className="text-2xl font-bold mb-4 text-black">
              Payment Details
            </h2>
            <img src="./payment.gif" className="w-12 h-12 rounded-md" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="cardNumber" className="block mb-1">
                Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className={`border text-black pl-10 ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                } rounded-md px-3 py-2 w-72`}
              />
              <img
                src={cardImage}
                alt="Search"
                className="h-6 w-6 absolute left-2 top-[50px] transform -translate-y-1/2"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>
            <div className="relative">
            <label htmlFor="cvv" className="block mb-1">
              CVV <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className={`border text-black pl-10 ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } rounded-md px-3 py-2 w-28`}
            />
            <img
                src={lockImage}
                alt="Search"
                className="h-6 w-6 absolute left-2 top-[50px] transform -translate-y-1/2"
              />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
            </div>
            <div className="flex items-center justify-start gap-4">
              <div>
                <label htmlFor="expiryMonth" className="block mb-1">
                  Expiry Month <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="expiryMonth"
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  className={`border text-black ${
                    errors.expiry ? "border-red-500" : "border-gray-300"
                  } rounded-md px-3 py-2 w-20`}
                  placeholder="MM"
                />
              </div>
              <div>
                <label htmlFor="expiryYear" className="block mb-1">
                  Expiry Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="expiryYear"
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  className={`border text-black ${
                    errors.expiry ? "border-red-500" : "border-gray-300"
                  } rounded-md px-3 py-2 w-20`}
                  placeholder="YYYY"
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 mt-5 rounded-tr-lg rounded-bl-lg transition-colors duration-300 shadow-xl"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PaymentForm;
