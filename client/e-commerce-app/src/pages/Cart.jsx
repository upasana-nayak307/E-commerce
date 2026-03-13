import { useNavigate } from "react-router-dom";
import style from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function Cart() {
  const navigate=useNavigate();
  const {cart,removeFromCart, increaseQty, decreaseQty}=useContext(CartContext);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  function navigation(){
    navigate('/checkout');
  }
  return (
    <div className={style.cartWrapper}>
      <div className={style.cartContainer}>

        <div className={style.cartHeader}>
          <h1 className={style.pageTitle}>Shopping Cart</h1>
          <p className={style.headerSubtitle}>{cartCount} items in your cart</p>
        </div>

        <div className={style.cartContent}>

          <div className={style.cartItemsSection}>

            {cart.map((item)=>(
              <div className={style.cartItem} key={item._id}>
              <img src={item.image} className={style.itemImage} alt={item.name}></img>

              <div className={style.itemDetails}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>

              <div className={style.itemPrice}>
                <div className={style.itemPriceValue}>${item.price}</div>
                <div className={style.itemPriceLabel}>per item</div>
              </div>

              <div className={style.quantitySelector}>
                <button
                    className={style.qtyBtn}
                    onClick={() => decreaseQty(item._id)}
                  >
                    −
                  </button>

                  <div className={style.qtyDisplay}>
                    {item.quantity}
                  </div>

                  <button
                    className={style.qtyBtn}
                    onClick={() => increaseQty(item._id)}
                  >
                    +
                </button>
              </div>

              <button
                className={style.removeBtn}
                onClick={() => removeFromCart(item._id)}
              >
                ✕
              </button>
            </div>
            ))}

          </div>

          <div className={style.orderSummary}>
            <h2 className={style.summaryTitle}>Order Summary</h2>

            <div className={style.summaryRow}>
              <span className={style.summaryLabel}>Subtotal</span>
              <span className={style.summaryValue}>${subtotal}</span>
            </div>

            {/* <div className={style.summaryRow}>
              <span className={style.summaryLabel}>Shipping</span>
              <span className={style.summaryValue}>${tax}</span>
            </div> */}

            <div className={style.summaryRow}>
              <span className={style.summaryLabel}>Tax (10%)</span>
              <span className={style.summaryValue}>${tax}</span>
            </div>

            <div className={style.totalRow}>
              <span className={style.totalLabel}>Total</span>
              <span className={style.totalValue}>${total}</span>
            </div>

            <button className={style.checkoutBtn} onClick={navigation}>
              Proceed to Checkout
            </button>

            <a href="#" className={style.continueLink} onClick={navigate('/luxe')}>
              Continue Shopping
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}