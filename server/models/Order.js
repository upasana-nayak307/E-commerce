const mongoose=require("mongoose");
const User=require("./User.js");
const Product=require("./Product.js");

// Order schema
const orderSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "shipped", "delivered", "cancelled"],
        default: "pending"
    },
    paymentMethod: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},
{
    timestamps: true
}
);
// order model
const Order=mongoose.model("Order",orderSchema);

module.exports=Order;