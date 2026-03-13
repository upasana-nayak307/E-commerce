const Order=require("../models/Order.js");
const Product = require("../models/Product.js");

// create order
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      userId: req.user.id,      
      products: req.body.products,
      totalPrice: req.body.totalPrice,
      paymentMethod: req.body.paymentMethod, 
      name:req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address  
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// view all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate("products.productId", "name price image"); 
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// cancel the order
exports.cancelOrder=async (req,res)=>{
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to cancel order" });
  }
}

// update order status
exports.updateOrderStatus=async (req,res) => {
    try {
        const {orderId,status}=req.body;
        if(!['pending','processing','shipped','delivered','cancelled'].includes(status)){
            return res.status(400).json({ message: "Invalid status value" });
        }
        const order=await Order.findByIdAndUpdate(
            orderId,{status},{new:true}
        ).populate("userId","name email").populate("products.productId","name price image");
        res.json(order);
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("products.productId", "name price image");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};