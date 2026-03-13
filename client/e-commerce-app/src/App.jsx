import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import CheckoutForm from "./pages/Checkout";
import AboutLuxe from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./pages/Home";
import Layout from "./components/Layout";
import AdminDashboard from "./admin/AdminDashboard";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import ProtectedRoute from "./components/ProtectedRoute";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Routes>

              {/* Pages with Navbar + Announcement */}
              <Route element={<Layout />}>

                <Route
                  path="/luxe"
                  element={
                    <ProtectedRoute>
                      <HeroSection />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/cart-details"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <CheckoutForm />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/about"
                  element={
                    <ProtectedRoute>
                      <AboutLuxe />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/contact"
                  element={
                    <ProtectedRoute>
                      <Contact />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <MyOrders />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/product-details/:id"
                  element={
                    <ProtectedRoute>
                      <ProductDetails />
                    </ProtectedRoute>
                  }
                />

              </Route>

              {/* Pages WITHOUT Navbar */}
              <Route path="/" element={<Register />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;