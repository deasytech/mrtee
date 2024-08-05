import mongoose, { model, models } from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  media: [ String ],
  category: String,
  collections: [ { type: mongoose.Schema.Types.ObjectId, ref: "Collection" } ],
  categories: [ { type: mongoose.Schema.Types.ObjectId, ref: "Category" } ],
  tags: [ String ],
  sizes: [ String ],
  colors: [ String ],
  price: Number,
  featured: [ { type: Boolean, default: false } ],
}, { timestamps: true });

const Product = models?.Product || model("Product", ProductSchema);

export default Product;