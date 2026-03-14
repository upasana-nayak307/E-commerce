# 🛒 MERN E-Commerce Website

![GitHub repo size](https://img.shields.io/github/repo-size/your-username/your-repo-name)
![GitHub stars](https://img.shields.io/github/stars/your-username/your-repo-name?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/your-repo-name?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/your-repo-name)

A full-stack e-commerce application built with **MERN stack**. Users can browse products, add them to the cart, place orders, and manage their account. This project demonstrates full-stack development and modern web technologies.

---

## 🌟 Features

- 🔐 **User Authentication**: Register & Login with JWT
- 🛍️ **Product Listing & Search**
- 🛒 **Add to Cart & Remove Items**
- 📦 **Order Placement & Order History**
- ❌ **Cancel Orders**
- 📱 **Responsive Design** for Mobile & Tablet
- 🌐 **RESTful APIs** with Node.js & Express
- 🗄️ **MongoDB Database** integration

---

## 🛠️ Tech Stack

### Frontend
- ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5)
- ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
- ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript)
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react)
- ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat&logo=bootstrap)

### Backend
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js)
- ![Express](https://img.shields.io/badge/-Express-000000?style=flat&logo=express)
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb)

---

## 📂 Project Structure

```
E-commerce
client/
│
├── admin/
│ ├── AdminDashboard.jsx
│ └── admin.module.css
│
├── api/
│ ├── auth.js
│ ├── axios.js
│ ├── order.js
│ └── product.js
│
├── assets/
│
├── components/
│ ├── About.jsx
│ ├── About.module.css
│ ├── Announcement.jsx
│ ├── Announcement.css
│ ├── Contact.jsx
│ ├── Contact.module.css
│ ├── Footer.jsx
│ ├── Footer.css
│ ├── Layout.jsx
│ ├── Navbar.jsx
│ ├── Navbar.css
│ ├── ProductCard.jsx
│ ├── ProductCard.css
│ └── ProtectedRoute.jsx
│
├── context/
│ ├── CartContext.jsx
│ ├── OrderContext.jsx
│ └── ProductContext.jsx
│
├── pages/
│ ├── Cart.jsx
│ ├── Cart.module.css
│ ├── Checkout.jsx
│ ├── Checkout.css
│ ├── Featured.jsx
│ ├── Featured.css
│ ├── Home.jsx
│ ├── Home.module.css
│ ├── Login.jsx
│ ├── MyOrders.jsx
│ ├── Order.module.css
│ ├── ProductDetails.jsx
│ ├── PDetails.module.css
│ ├── productGrid.jsx
│ └── ProductGrid.css
│ ├── Register.jsx
│ └── Register.css
│
├── App.jsx
├── App.css
├── index.js
├── main.jsx
├── index.css
└── vite.config.js
server/
│
├── config/
│ ├── cloudinary.js
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── orderController.js
│ └── productController.js
│
├── middleware/
│ ├── authMiddleWare.js
│ └── upload.js
│
├── models/
│ ├── User.js
│ ├── Product.js
│ └── Order.js
│
├── routes/
│ ├── authRoutes.js
│ ├── orderRoutes.js
│ └── productRoutes.js
│
├── node_modules/
├── .env (untracked)
├── package.json
├── package-lock.json
└── server.js
```


---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/upasana-nayak307/E-commerce.git

### 2️⃣ Install backend dependencies
cd server
npm install

### 3️⃣ Install frontend dependencies
cd ../client
npm install

### ▶️ Run the Application
## Start Backend
cd server
npm start

## Start frontend
cd client
npm start

## Frontend → http://localhost:5173

## Backend → http://localhost:8080

---

🔑 Environment Variables

Create a .env file inside server/:

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloud_name
API_KEY=Your_api_key
API_SECRET=your_api_secret

⚠️ Do not upload .env to GitHub.

---

🎯 Future Improvements

## Payment Gateway Integration (Stripe / Razorpay)

## Product Reviews & Ratings

## Wishlist Feature

---

👩‍💻 Author

** Upasana Nayak **
## GitHub: https://github.com/upasana-nayak307

⭐ If you like this project, give it a star on GitHub!