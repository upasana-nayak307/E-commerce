import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderProvider({ children }) {

  const [orders, setOrders] = useState([]);

  const placeOrder = (cart, total) => {

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString()
    };

    setOrders([...orders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}