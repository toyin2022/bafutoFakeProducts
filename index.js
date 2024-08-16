const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const generateFakeProducts = require("./faker");
const app = express();
const port = 2024;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://sheriffdeenoluwatoyinoni:bafuto@products.ipfvr.mongodb.net/?retryWrites=true&w=majority&appName=products&dbName=products"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post("/generate-products", async (req, res) => {
  try {
    await generateFakeProducts();
    res.json({ message: "Fake products generated!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
