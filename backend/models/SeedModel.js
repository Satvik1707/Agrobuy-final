const mongoose = require("mongoose");

const SeedSchema = mongoose.Schema(
  {
    breeder: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Breeder",
    },
    seedName: {
      type: String,
      required: true,
      default: "0",
    },
    quantity: {
      type: Number,
      required: true,
      default: "0",
    },
    date: {
      type: Date,
      required: true,
      default: "01/01/2001",
    },
    place: {
      type: String,
      required: true,
      default: "0",
    },
    category: {
      type: String,
      required: true,
      default: "0",
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Seed = mongoose.model("Seed", SeedSchema);

module.exports = Seed;
