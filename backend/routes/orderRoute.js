const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//getUserOrder
router.route("/myorders").get(protect, getMyOrders);
//get order by id
router.route("/:id").get(protect, getOrderById);
//craete new order
router.route("/").post(protect, addOrderItem);
//update order
router.route("/:id/pay").put(protect, updateOrderToPaid);

router.route("/orders").get(getOrders)

module.exports = router;
