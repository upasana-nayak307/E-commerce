import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";
import { getOrders } from "../api/order";
import { cancelOrder } from "../api/order";
import styles from "./Order.module.css";

function MyOrders() {

  // const { orders } = useContext(OrderContext);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTracker, setShowTracker] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const steps = [
  "Order Placed",
  "Payment Confirmed",
  "Processing",
  "Shipped",
  "Delivered"
   ];
  const statusIndex = {
  pending: 1,
  processing: 3,
  shipped: 4,
  delivered: 5
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        setOrder(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  const handleCancelOrder = async (id) => {
  try {
    await cancelOrder(id);

    // update UI after cancel
    setOrder((prev) =>
      prev.map((o) =>
        o._id === id ? { ...o, status: "cancelled" } : o
      )
    );
  } catch (error) {
    console.error("Cancel failed", error);
  }
  };
  const handleBuyAgain = async (order) => {
  try {
    for (const item of order.products) {
      await addToCart(item.productId,item.quantity)
    }

    navigate("/cart-details");
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className={styles.ordersPage}>
      <div className={styles.appWrapper}>

        {/* Floating particles */}
        <div className={styles.floatingParticles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>

        <div className={styles.contentContainer}>

          {/* Header */}
          <header className={styles.header}>
            <h2 className={styles.pageTitle}>My Orders</h2>
            <p className={styles.subtitle}>
              Track and manage your purchases
            </p>
          </header>

          {/* Orders */}
          <div className={styles.ordersContainer}>

            {order.length===0 && <p>No orders found</p>}

            {order
            .filter((or) => or.products && or.products.length > 0)
            .map((or)=>(
            <div key={or._id} className={`${styles.glassCard} ${styles.orderCard}`}>

              <div className={styles.productImage}>
                <img
                src={or.products[0]?.productId?.image}
                alt={or.products[0]?.productId?.name}
                width={60}
                />
              </div>

              <div className={styles.orderDetails}>

                <div className={styles.orderTop}>
                  <div>
                    <h3>{or.products[0]?.productId?.name}</h3>
                    <p className={styles.orderId}>
                      Order #{or._id.slice(-6)}
                    </p>
                  </div>

                  <span className={`${styles.statusBadge} ${
                    or.status === "delivered"
                    ? styles.statusDelivered
                    : or.status === "shipped"
                    ? styles.statusShipped
                    : or.status === "pending"
                    ? styles.statusPending
                    : styles.statusCancelled
                  }`}>
                    {or.status}
                  </span>
                </div>

                <div className={styles.orderGrid}>
                  <div>
                    <p className={styles.label}>Order Date</p>
                    <p>{new Date(or.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <p className={styles.label}>Quantity</p>
                    <p>{or.products.reduce((sum, p) => sum + p.quantity, 0)}</p>
                  </div>

                  <div>
                    <p className={styles.label}>Total Price</p>
                    <p className={styles.price}>${or.totalPrice}</p>
                  </div>
                </div>

                <div className={styles.orderGrid}>
                  <div>
                    <p className={styles.label}>Delivery Address</p>
                    <p>{or.address || "Not Provided"}</p>
                  </div>

                  <div>
                    <p className={styles.label}>Payment</p>
                    <p>{or.paymentMethod || "Not Provided"}</p>
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.actions}>

                  {(or.status === "pending" ||
                  or.status === "processing" ||
                  or.status === "shipped") && (
                  <>
                    <button
                      className={styles.cancelBtn}
                      disabled={or.status === "shipped"}
                      onClick={() => handleCancelOrder(or._id)}
                    >
                      {or.status === "shipped" ? "Cannot Cancel" : "Cancel Order"}
                    </button>

                    <button className={styles.neonBtnSecondary}
                    onClick={() => {
                      setSelectedStatus(or.status);
                      setShowTracker(true);
                    }}
                    >
                      Track Order
                    </button>

                    <button className={styles.neonBtnSecondary}
                    onClick={() => handleBuyAgain(or)}
                    >
                      Buy Again
                    </button>
                  </>
                )}

                {(or.status === "delivered" || or.status === "cancelled") && (
                  <button
                    className={`${styles.neonBtnSecondary} ${
                      or.status === "cancelled" || or.status === "delivered"
                        ? styles.blueBtn
                        : ""
                    }`}
                    onClick={() => handleBuyAgain(or)}
                  >
                    Buy Again
                  </button>
                )}
                </div>

              </div>
            </div>
            ))}
            
          </div>

            {/* order card */}
            {showTracker && (
              <div className={styles.trackerOverlay}>
                <div className={styles.trackerBox}>
                    <div className={styles.trackerHeader}>
                      <h2>Track Order</h2>
                      <button onClick={() => setShowTracker(false)} className={styles.closeBtn}>
                        <X size={22} />
                      </button>
                    </div>

                    <div className={styles.trackerSteps}>
                      {steps.map((step, index) => {
                        const stepNumber = index + 1;
                        const active = stepNumber <= statusIndex[selectedStatus];

                        return (
                          <div
                            key={index}
                            className={`${styles.step} ${
                              active ? styles.stepActive : styles.stepInactive
                            }`}
                          >
                            <div className={styles.stepCircle}>
                              {active ? "✓" : stepNumber}
                            </div>
                            <span>{step}</span>
                          </div>
                        );
                      })}
                    </div>
                </div>
              </div>
            )}

        </div>
      </div>
    </div>
  );
}

export default MyOrders;