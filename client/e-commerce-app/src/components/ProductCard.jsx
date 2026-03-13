import React from "react";
import "./ProductCard.css";
import { viewProduct } from "../api/product";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ _id, image, name, price, category, isNew}) => {
  const navigate=useNavigate();
  async function handleViewProduct(_id){
      try {
        const res=await viewProduct(_id);
        console.log(res.data)
        navigate(`/product-details/${_id}`);
      } catch (error) {
        console.error(error.response.data);
      }
    }
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {isNew && (
          <span className="new-badge">New</span>
        )}
        <img
          src={image}
          alt={name}
          className="product-image"
          
        />
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name" onClick={()=>handleViewProduct(_id)}>{name}</h3>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;