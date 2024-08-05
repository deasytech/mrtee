import mongoose, { model, models } from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  image: {
    type: String,
    required: true,
  },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
  ],
},
  { timestamps: true }
);

const Category = models?.Category || model("Category", CategorySchema);

export default Category;