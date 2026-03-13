import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-brand">
            <h3 className="footer-logo">LUXE</h3>
            <p className="footer-description">
              Premium products for those who demand excellence in every detail.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Shop</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">New Arrivals</Link>
              <Link to="/" className="footer-link">Best Sellers</Link>
              <Link to="/" className="footer-link">Collections</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">About</Link>
              <Link to="/" className="footer-link">Careers</Link>
              <Link to="/" className="footer-link">Press</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Support</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Contact</Link>
              <Link to="/" className="footer-link">Shipping</Link>
              <Link to="/" className="footer-link">Returns</Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 LUXE. All rights reserved.
          </p>

          <div className="footer-legal">
            <Link to="/" className="footer-link">Privacy</Link>
            <Link to="/" className="footer-link">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;