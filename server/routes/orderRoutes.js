const express=require("express");
const router=express.Router();
const {verifyToken, verifyAdmin} = require("../middleware/authMiddleware");

const orderController=require("../controllers/orderController");

router.post('/',verifyToken,orderController.createOrder);
router.get('/',verifyToken,orderController.getOrders);
router.put('/cancel/:id',verifyToken,orderController.cancelOrder);
router.get("/admin/orders", verifyToken, orderController.getAllOrders);
router.put('/admin/update-status',verifyToken,orderController.updateOrderStatus);

module.exports=router;