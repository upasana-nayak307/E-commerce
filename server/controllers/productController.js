const Product=require('../models/Product.js');

// get all the products
exports.allProducts= async (req,res) => {
    try {
        const products=await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get single product
exports.viewProduct=async (req,res) => {
    try {
        const id=req.params.id;
        const product=await Product.findById(id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a product
exports.createProduct=async (req,res) => {
    try {
        const product=new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category:req.body.category,
            stock: req.body.stock,
            image: req.file.path 
        });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { ...req.body };

    // If a new image is uploaded via multer
    if (req.file) {
      updateData.image = req.file.path;
    } 
    // If no new image but _existingImage exists in body
    else if (req.body._existingImage) {
      updateData.image = req.body._existingImage;
    }
    const product = await Product.findByIdAndUpdate(id, updateData, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
// delete a product
exports.removeProduct=async (req,res) => {
    try {
        const id=req.params.id;
        const product=await Product.findByIdAndDelete(id);
        res.status(201).json({message:"Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}