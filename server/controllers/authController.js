// It will handle login and register data

const User=require("../models/User.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require('dotenv').config()

// register
exports.registerUser=async (req,res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser=await User.findOne({email:req.body.email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        // hash password
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({
            name,email,password:hashedPassword
        })
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
// login
exports.loginUser=async (req,res) => {
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email});
        if(!user){
          return res.status(400).json({ message: "Invalid credentials" });
        }
        // check password
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // create a jwt token
        const token=jwt.sign(
            {id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"2d"}
        );
        res.json({ message: "Login successful", user,token });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};