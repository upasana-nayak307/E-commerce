import React, { createContext, useState, useEffect } from "react";
import { allProducts } from "../api/product";

// 1️⃣ Create the context
export const ProductContext = createContext();

// 2️⃣ Create the provider
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const res = await allProducts();
      setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  // Fetch once when provider mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};