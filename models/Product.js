const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  slashedPrice: { type: Number },
  rating: { type: Number, default: 0 },
  category: { type: String, required: true },
  stock: { type: Number, default: 100 },
  imageUrl: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
