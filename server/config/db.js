const mongoose=require("mongoose");
 const connectDB =async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/E-commerce');
        console.log("Database connected sucessfully");
    }catch(error){
        console.log("There is some issue in database connection");
    }
}
module.exports=connectDB;