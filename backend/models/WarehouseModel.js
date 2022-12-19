const mongoose = require("mongoose");

const WarehouseSchema = mongoose.Schema(
  {
    address1: {
      type: String,
      required: true,
      default: "0",
    },
    address2: {
      type: String,
      required: true,
      default: "0",
    },
    cityName: {
      type: String,
      required: true,
      default: "0",
    },
    state: {
      type: String,
      required: true,
      default: "0",
    },
    pincode: {
      type: String,
      required: true,
      default: "0",
    },
    phoneNo: {
      type: String,
      required: true,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);

module.exports = Warehouse;
