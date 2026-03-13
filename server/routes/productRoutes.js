const express=require("express");
const router=express.Router();
const upload = require("../middleware/upload");
const {verifyToken,verifyAdmin} = require("../middleware/authMiddleWare");

const productController=require("../controllers/productController");

router.get('/',verifyToken,productController.allProducts);
router.post('/',verifyToken,verifyAdmin,upload.single("image"),productController.createProduct);
router.get('/:id',verifyToken,productController.viewProduct);
router.put('/:id',verifyToken,upload.single("image"),verifyAdmin,productController.updateProduct);
router.delete('/:id',verifyToken,verifyAdmin,productController.removeProduct);

module.exports=router;