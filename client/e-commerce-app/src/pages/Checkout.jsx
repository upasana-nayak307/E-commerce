import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { createOrder } from "../api/order";
import { CreditCard, CircleDollarSign, Truck } from "lucide-react";
import confetti from "canvas-confetti";
import "./Checkout.css";

const CheckoutForm = () => {
  const navigate=useNavigate();
  const {cart,clearCart}=useContext(CartContext);
  const {placeOrder}=useContext(OrderContext);
  const [delivery, setDelivery] = useState("standard");
  const [method, setMethod] = useState("card");
  const [orderConfirmed, setOrderConfirmed]=useState(false);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = delivery === "express" ? 25 : 0;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;
  const [address,setAddress]=useState({
    fullName:"",
    email:"",
    phone:"",
    street:'',
    city:"",
    state:"",
    zipCode:""
  });
  const handleCheckout=async ()=>{
  if(cart.length === 0){
    alert("Your cart is empty");
    return;
  }
  try {
    const orderData = {
      products: cart.map(item => ({
        productId: item._id,
        quantity: item.quantity,
      })),
      paymentMethod: method,
      name:address.fullName,
      email:address.email,
      phone:address.phone,
      address: `${address.street}, ${address.city}, ${address.state} ${address.zipCode} `, 
      totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    const res = await createOrder(orderData);
    console.log("Order created:", res.data);
    placeOrder(cart,total);
    clearCart();
    setOrderConfirmed(true);
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        zIndex:10000,
      });
    }, 1500);
  } catch (err) {
    console.error(err);
  }
  }
  return (
    <div className="checkout-layout">

      {/* LEFT SIDE */}
      <div className="checkout-left">

        {/* SHIPPING CARD */}
        <div className="checkout-container">
          <header className="checkout-header">
            <h1>Secure Checkout</h1>
            <p>Complete your order</p>
          </header>

          <div className="checkout-card">

            {/* Shipping Section */}
            <section className="form-section">
              <h2>Shipping Information</h2>
              <div className="input-group">
                <input type="text" 
                placeholder="Full Name" 
                value={address.fullName}
                onChange={(e) => setAddress({...address, fullName: e.target.value})}
                />
                <input type="email" 
                placeholder="Email Address" 
                value={address.email}
                onChange={(e) => setAddress({...address, email: e.target.value})}
                />
                <input type="tel" 
                placeholder="Phone Number" 
                value={address.phone}
                onChange={(e) => setAddress({...address, phone: e.target.value})}
                />
                <input type="text" 
                placeholder="Street Address" 
                value={address.street}
                onChange={(e) => setAddress({...address, street: e.target.value})}
                />
                <div className="row">
                  <input type="text" 
                  placeholder="City" 
                  className="flex-2" 
                  value={address.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                  />
                  <input type="text" 
                  placeholder="State" 
                  className="flex-1" 
                  value={address.state}
                  onChange={(e) => setAddress({...address, state: e.target.value})}
                  />
                  <input type="text" 
                  placeholder="Zip Code" 
                  className="flex-1" 
                  value={address.zipCode}
                  onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                  />
                </div>
              </div>
            </section>

            <hr className="hr" />

            {/* Delivery Section */}
            <section className="form-section">
              <h2 className="section-label">DELIVERY METHOD</h2>

              <div
                className={`delivery-option ${
                  delivery === "standard" ? "active" : ""
                }`}
                onClick={() => setDelivery("standard")}
              >
                <div className="radio-dot"></div>
                <div className="delivery-details">
                  <div className="delivery-title">
                    Standard Delivery <span className="price">Free</span>
                  </div>
                  <div className="delivery-time">
                    2-3 Business Days
                  </div>
                </div>
              </div>

              <div
                className={`delivery-option ${
                  delivery === "express" ? "active" : ""
                }`}
                onClick={() => setDelivery("express")}
              >
                <div className="radio-dot"></div>
                <div className="delivery-details">
                  <div className="delivery-title">
                    Express Delivery <span className="price">$25</span>
                  </div>
                  <div className="delivery-time">
                    Next Business Day
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* PAYMENT CARD */}
        <div className="payment-card">
          <h2 className="payment-title">Payment Method</h2>

          <div className="payment-options">

            {/* Card */}
            <div
              className={`pay-option ${method === "card" ? "active" : ""}`}
              onClick={() => setMethod("card")}
            >
              <div className="radio-dot"></div>
              <CreditCard className="method-icon" size={20} />
              <div className="method-info">
                <span className="method-name">
                  Credit or Debit Card
                </span>
                <span className="method-sub">
                  Visa, Mastercard, Amex
                </span>
              </div>
            </div>

            {/* UPI */}
            <div
              className={`pay-option ${method === "upi" ? "active" : ""}`}
              onClick={() => setMethod("upi")}
            >
              <div className="radio-dot"></div>
              <CircleDollarSign className="method-icon" size={20} />
              <div className="method-info">
                <span className="method-name">UPI Payment</span>
                <span className="method-sub">Coming soon</span>
              </div>
            </div>

            {/* COD */}
            <div
              className={`pay-option ${method === "cod" ? "active" : ""}`}
              onClick={() => setMethod("cod")}
            >
              <div className="radio-dot"></div>
              <Truck
                className="method-icon"
                size={20}
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="method-info">
                <span className="method-name">
                  Cash on Delivery
                </span>
                <span className="method-sub">
                  Pay when you receive
                </span>
              </div>
            </div>

          </div>

          {/* Card Details Form */}
          {method === "card" && (
            <div className="card-details-form">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="full-width"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="full-width"
              />
              <div className="row">
                <input type="text" placeholder="MM/YY" className="flex-1" />
                <input type="text" placeholder="CVV" className="flex-1" />
              </div>
            </div>
          )}
        </div>

      </div>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <div className="summary-sidebar">
        <h2 className="serif-title">Order Summary</h2>

        <div className="item-list">
          {cart.map((item)=>(
            <div className="summary-item" key={item._id}>
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-sub">{item.category}</div>
                <div className="item-qty">Qty: {item.quantity}</div>
              </div>
              <div className="item-price">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
          

          {/* <div className="summary-item">
            <div className="item-info">
              <div className="item-name">Leather Strap</div>
              <div className="item-sub">Premium Quality</div>
              <div className="item-qty">Qty: 1</div>
            </div>
            <div className="item-price">$120</div>
          </div>

          <div className="summary-item">
            <div className="item-info">
              <div className="item-name">Gift Wrapping</div>
              <div className="item-sub">Luxury packaging</div>
              <div className="item-qty">Qty: 1</div>
            </div>
            <div className="item-price">$15</div>
          </div> */}

        </div>

        <div className="cost-breakdown">
          <div className="cost-line">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="cost-line">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="cost-line">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="total-section">
          <span className="total-label">Total Amount</span>
          <span className="total-price">${total.toFixed(2)}</span>
        </div>

        <button className="btn-confirm"
        onClick={handleCheckout}
        >CONFIRM ORDER</button>
      </div>
      {orderConfirmed && (
        <div className="order-success-overlay">
          <div className="order-success-card">
            
            <div className="success-animation">
              <div className="checkmark-circle">
                <div className="checkmark"></div>
              </div>
            </div>

            <h2 className="confirm-title">Order Confirmed 🎉</h2>
            <p>Your order has been placed successfully.</p>
            <div className="truck-container"
            >
            <span className="truck">⛟</span>
            </div>

            <button 
              className="success-btn"
              onClick={() =>{
                setOrderConfirmed(false);
                navigate('/luxe');
              }}
            >
              Continue Shopping
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;