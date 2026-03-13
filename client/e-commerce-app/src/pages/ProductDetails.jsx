import { useEffect, useState} from "react";
import styles from "./PDetails.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { viewProduct } from "../api/product";
import { useParams,useNavigate } from "react-router-dom";
export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("40mm");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const {id}=useParams();
  const [products,setProducts]=useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate=useNavigate();
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    addToCart(products, quantity);
    navigate("/luxe");
  };
  useEffect(()=>{
    async function fetchProducts(params) {
      try {
        const res=await viewProduct(id);
        setProducts(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    }
    fetchProducts();
  },[id])

  if (!products) {
    return <p>Loading product...</p>;
  }


  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productDetailsGrid}>
        
        {/* LEFT SIDE */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={products.image}
              alt={products.name}
              className={styles.productImage}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.details}>
          <span className={styles.category}>{products.category}</span>
          <h1 className={styles.productTitle}>{products.name}</h1>

          <p className={styles.price}>${products.price}</p>

          <p className={styles.description}>
            {products.description}
          </p>

          {/* Color */}
          <div className={styles.detailSection}>
            <h4>COLOR</h4>
            <div className={styles.colors}>
              {["Black", "White", "Silver", "Gold"].map((color) => (
                <button
                  key={color}
                  className={`${styles.colorBtn} ${
                    selectedColor === color ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className={styles.detailSection}>
            <h4>BAND SIZE</h4>
            <div className={styles.sizes}>
              {["40mm", "42mm", "44mm", "46mm"].map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${
                    selectedSize === size ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className={styles.detailSection}>
            <h4>QUANTITY</h4>
            <div className={styles.quantity}>
              <button
                className={styles.quantityBtn}
                onClick={decreaseQty}
              >
                -
              </button>
              <span className={styles.quantityValue}>{quantity}</span>
              <button
                className={styles.quantityBtn}
                onClick={increaseQty}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={handleAddToCart}>ADD TO CART</button>
            <button className={styles.outlineBtn}>BUY NOW</button>
          </div>

        </div>
      </div>
    </div>
  );
}