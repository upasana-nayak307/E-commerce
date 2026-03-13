require("dotenv").config();
const express=require("express");
const app=express();
let port=process.env.PORT;
const cors = require("cors");
app.use(cors({origin:"http://localhost:5173"}));

// connecting database 
const connectDB=require("./config/db.js");
connectDB()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads',express.static("uploads"));

const authRoutes=require("./routes/authRoutes.js");
const productRoutes=require("./routes/productRoutes.js");
const orderRoutes=require("./routes/orderRoutes.js");

app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/orders",orderRoutes);

app.listen(port,()=>{
    console.log("Server running on port : ",port);
});