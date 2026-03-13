import {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X ,Heart} from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./navbar.css";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isadmin,setIsAdmin]=useState(false);
  const [userMenuOpen,setUserMenuOpen]=useState(false);
  const {cart}=useContext(CartContext);
  const navigate = useNavigate();

  function click() {
    navigate("/cart-details");
  }
  function click1(){
    navigate("/login");
  }
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === "admin@gmail.com") {
      setIsAdmin(true);
    }
  },[])
  return (
    <div className="luxe-navbar">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <Link to="/" className="logo">
            LUXE
          </Link>

          <div className="nav-links">
            <Link to="/luxe">Shop</Link>
            <Link to="/luxe/collection">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {isadmin && (
              <Link to="/admin">Dashboard</Link>
            )}
          </div>

          <div className="nav-icons">
            <button>
              <Heart size={20} />
            </button>

            <button className="cart-btn" onClick={click}>
              <ShoppingBag size={20} />
              <span className="cart-count">{cartCount}</span>
            </button>
            <div className="user-menu">
              <button className="cart-btn" onClick={()=>setUserMenuOpen(!userMenuOpen)}>
                <User size={20} />
              </button>
              {userMenuOpen && (
                <div className="user-dropdown">
                  <p className="dropdown-item" onClick={()=> navigate('/orders')}>My Orders</p>
                  <p className="dropdown-item" onClick={click1}>Logout</p>
                </div>
              )}
            </div>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/">Shop</Link>
            <Link to="/luxe/collection">Collection</Link>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;