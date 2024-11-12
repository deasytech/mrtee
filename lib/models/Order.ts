import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerClerkId: String,
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      size: String,
      quantity: Number,
    },
  ],
  shippingAddress: {
    phone: String,
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    notes: String,
  },
  shippingRate: String,
  totalAmount: Number,
}, { timestamps: true });

const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema);

export default Order;