import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/productModel";

// @desc Fetch all prods
// @route GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProductById, getProducts };
