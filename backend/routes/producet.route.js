const express = require("express");
const { ProductModel } = require("../model/product.mode");
const { auth } = require("../middleware/auth");

const product = express.Router();
// product.use(auth);

product.post("/api/products", async (req, res) => {
  const payload = req.body;
  try {
    const products = new ProductModel(payload);
    await products.save();
    res.status(201).json({ msg: "Product is added", products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

product.get("/api/products", async (req, res) => {
  const { name, order } = req.query;
  console.log(name, order, "a");
  try {
    const products = await ProductModel.find({
      name: { $regex: new RegExp(name, "i") },
    }).sort({ price: order === "desc" ? -1 : 1 });
    res.status(200).json({ msg: "Product is added", products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

product.patch("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const updateProduct = req.body;
  const username = req.body.name;

  try {
    const singleProduct = await ProductModel.findByIdAndUpdate(
      { _id: id, username },
      updateProduct,
      { new: true }
    );
    if (!singleProduct) {
      res.status(400).json({ msg: "blogs not updated" });
    }
    res
      .status(200)
      .json({ mag: `product Updated now of ${id}!`, singleProduct });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

product.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const productname = req.body.name;
  console.log(productname);

  try {
    const deleteProduct = await ProductModel.findByIdAndDelete({
      _id: id,
      productname,
    });
    if (!deleteProduct) {
      res.status(400).json({ msg: "product not deleted" });
    }
    res
      .status(200)
      .json({ mag: `product Deleted now of  ${id}!`, deleteProduct });
    // console.log(deleteProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = {
  product,
};
