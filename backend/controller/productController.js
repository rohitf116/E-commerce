const ProductModel = require("../model/ProductModel");

exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      description,
      brand,
      category,
      price,
      countInStock,
      rating,
      numReviews,
    } = req.body;
    const productCreated = await ProductModel.create({
      name,
      image,
      description,
      brand,
      category,
      price,
      countInStock,
      rating,
      numReviews,
    });
    res
      .status(201)
      .json({ status: true, message: "Success", data: productCreated });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Server error", error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundProduct = await ProductModel.findOne({ _id: id });
    res
      .status(200)
      .json({ status: true, message: "Success", data: foundProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Server error", error: error.message });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const foundProducts = await ProductModel.find();
    // console.log("hii", foundProducts);
    res.status(200).json({
      status: true,
      items: foundProducts.length,
      message: "Success",
      data: foundProducts,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Server error", error: error.message });
  }
};
