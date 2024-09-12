import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new order
// @route POST/api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// @desc Get logged in user items
// @route GET/api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc Get logged in user items
// @route GET/api/orders/:id
// @access Private
const getOrdersByID = asyncHandler(async (req, res) => {
  res.send("get orders by ID");
});

// @desc Update oder to paid
// @route GET/api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("order to paid");
});

// @desc Update oder to delivered
// @route GET/api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("order to delivered");
});

// @desc Get all orders
// @route GET/api/orders
// @access Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrdersByID,
  updateOrderToPaid,
  updateOrderToDelivered,
  getAllOrders,
};
