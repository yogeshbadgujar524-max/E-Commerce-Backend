import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,

  items: [
    {
      id: Number,
      title: String,
      image: String,
      price: Number,
      quantity: Number,
    },
  ],

  total: Number,

  status: {
    type: String,
    default: "Pending",
  },

  date: {
    type: String,
  },
});

export const OrderModel =
  mongoose.model("Order", orderSchema);