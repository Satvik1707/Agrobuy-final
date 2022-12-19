const mongoose = require("mongoose");

const BreederSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    email: {
      type: String,
      required: true,
      default: "0",
    },
    firstName: {
      type: String,
      required: true,
      default: "0",
    },
    lastName: {
      type: String,
      required: true,
      default: "0",
    },
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

const Breeder = mongoose.model("Breeder", BreederSchema);

module.exports = Breeder;
