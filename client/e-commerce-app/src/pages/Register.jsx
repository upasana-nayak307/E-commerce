import "./Register.css";
import {registerUser} from "../api/auth"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [registerData,setRegisterData]=useState({
    name:"",
    email:"",
    password:"",
    role:"user"
  });
  const handleChange=(e)=>{
    setRegisterData({...registerData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const res=await registerUser(registerData);
      console.log(res.data);
      alert("Registration successfull");
    } catch (error) {
      console.error(error.response.data);
      alert("Registration failed");
    }
  }
  return (
    <div className="luxe-container">
      <div className="glass-card">
        <div className="logo-section">
          <div className="logo">LUXE</div>
          <div className="tagline">Premium Collection</div>
        </div>

        <div className="content-section">
          <h1 className="section-title">Create Your Account</h1>
          <p className="section-description">
            Join our exclusive luxury community.
          </p>
        </div>

          {/* <div className="success-message show">
            ✓ Registration Successful!
          </div> */}

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={registerData.name}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registerData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="cta-button">
            Register
          </button>
          <p className="reg">Already have an account?
            &nbsp;<Link to="/login" style={{textDecoration:"none",color:"#5048E5"}}>Sign in</Link>
          </p>
        </form>

        <div className="links-section">
          <a href="#" className="footer-link">
            Explore Collection
          </a>
          <div className="divider"></div>
          <a href="#" className="footer-link">
            About LUXE
          </a>
        </div>
      </div>
    </div>
  );
}