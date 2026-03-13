import "./Register.css";
import { loginUser } from "../api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate();
  const [loginData,setLoginData]=useState({
    password:"",
    email:""
  });
  const handlChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const res=await loginUser(loginData);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      alert("Login successfull");
      navigate('/luxe');
    } catch (error) {
      console.error(error.response.data);
      alert("Login failed");
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
          <h1 className="section-title">Welcome back</h1>
          <p className="section-description">
            Join our exclusive luxury community.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handlChange}
            required
          />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handlChange}
              required
            />
          </div>

            <div className="check">
                <input type="checkbox"/>
                <p>Remember me for 30days</p>
                <a href="#">Forgot password</a>
            </div>

          <button type="submit" className="cta-button">
            Login
          </button>
          <div className="or-separator">OR</div>
            <button className="gsi-material-button">
                <div className="gsi-material-button-state"></div>
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style={{display: "block"}}>
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                    </div>
                    <span className="gsi-material-button-contents">Sign in with Google</span>
                    <span style={{display: "none"}}>Sign in with Google</span>
                </div>
            </button>
            <p className="reg">Don't have an account?
              &nbsp;<Link to="/register" style={{textDecoration:"none",color:"#5048E5"}}>Sign up</Link>
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