const mongoose=require("mongoose");
const User=require("./User.js");

// Product schema
const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true          // Remove extra spaces
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
},
{
    timestamps: true        // Automatically adds createdAt and updatedAt
}
);
// product model
const Product=mongoose.model("Product",productSchema);

module.exports=Product;