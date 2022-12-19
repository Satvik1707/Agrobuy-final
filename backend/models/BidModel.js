const mongoose = require("mongoose");

const BidSchema = mongoose.Schema(
  {
    sourceaddress1: {
      type: String,
      required: true,
      default: 10,
    },
    sourceaddress2: {
      type: String,
      required: true,
      default: 10,
    },
    sourcecity: {
      type: String,
      required: true,
      default: 10,
    },
    sourcestate: {
      type: String,
      required: true,
      default: 10,
    },
    sourcepinCode: {
      type: Number,
      required: true,
      default: 10,
    },
    destinationaddress1: {
      type: String,
      required: true,
      default: 10,
    },
    destinationaddress2: {
      type: String,
      required: true,
      default: 10,
    },
    destinationcity: {
      type: String,
      required: true,
      default: 10,
    },
    destinationstate: {
      type: String,
      required: true,
      default: 10,
    },
    destinationpinCode: {
      type: Number,
      required: true,
      default: 10,
    },

    shipmentname: {
      type: String,
      required: true,
      default: 10,
    },
    shipmentquantity: {
      type: Number,
      required: true,
      default: 10,
    },
    shipmentcost: {
      type: Number,
      required: true,
      default: 10,
    },

    noOfBidders: {
      type: Number,
      required: true,
      default: 10,
    },
    endTime: {
      type: Date,
      required: true,
      default: "2020-01-01T00:00:00.000Z",
    },
    bidders: [
      {
        bidder_id: {
          type: String,
          required: false,
        },
        bid_amount: {
          type: Number,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Bid = mongoose.model("Bid", BidSchema);

module.exports = Bid;
