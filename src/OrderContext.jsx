import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <OrderContext.Provider value={{ orderItems, setOrderItems, totalPrice, setTotalPrice }}>
      {children}
    </OrderContext.Provider>
  );
};
