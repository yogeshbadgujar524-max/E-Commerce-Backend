import { OrderModel } from "../Models/OrderSchema.js";


// Create Order
export const createOrder = async (req, res) => {
  try {
    const order = await OrderModel.create(req.body);

    res.status(201).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Orders
export const getOrders = async (req, res) => {
  try {

    const orders =
      await OrderModel.find();

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Update Order Status
export const updateOrderStatus = async (req, res) => {

  try {

    const order =
      await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Delete Order
export const deleteOrder = async (req, res) => {

  try {

    await OrderModel.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Order Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};