const express = require("express");
const {
  getProduct,
  getProducts,
} = require("../controllers/productsController");
const Product = require("../models/ProductModel");
const router = express.Router();
const Seed = require("../models/SeedModel");
const Bid = require("../models/BidModel");

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

router.post("/products/createbid", async (req, res) => {
  const {
    sourceAdd1,
    sourceAdd2,
    sourceCity,
    sourceState,
    sourcePincode,
    destAdd1,
    destAdd2,
    destCity,
    destState,
    destPincode,
    shipName,
    shipCost,
    shipQuantity,
    endDate,
    bidders,
  } = req.body.bid;

  try {
    const newBid = new Bid({
      sourceaddress1: sourceAdd1,
      sourceaddress2: sourceAdd2,
      sourcecity: sourceCity,
      sourcestate: sourceState,
      sourcepinCode: sourcePincode,
      destinationaddress1: destAdd1,
      destinationaddress2: destAdd2,
      destinationcity: destCity,
      destinationstate: destState,
      destinationpinCode: destPincode,
      shipmentname: shipName,
      shipmentquantity: shipQuantity,
      shipmentcost: shipCost,
      noOfBidders: bidders,
      endTime: endDate,
    });
    const createbid = await newBid.save();
    res.send(createbid);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/products/allopen", async (req, res) => {
  try {
    let currdate = new Date();
    const bids = await Bid.find({endTime: {$gte: currdate }});
    res.status(201).send(bids);
  } catch (error) {
    res.json({ message: error.data });
  }
});
router.get("/products/allclosed", async (req, res) => {
  try {
    let currdate = new Date();
    const bids = await Bid.find({endTime: {$lt: currdate }});
    res.status(201).send(bids);
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.get("/products/getapprovedseeds", async (req, res) => {
  try {
    const seeds = await Seed.find({ isApproved: true });
    res.status(201).send(seeds);
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.get("/products/getallseeds", async (req, res) => {
  try {
    const seeds = await Seed.find({ isApproved: false });
    res.send(seeds);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/products/approveseed", async (req, res) => {
  try {
    const seedid = req.body.seedid;
    const seed = await Seed.findOne({ _id: seedid });

    seed.isApproved = true;
    await seed.save();
    
  } catch (error) {}
});

router.post("/products/denyseed", async (req, res) => {
  const seedid = req.body.seedid;

  const seed = await Seed.findOneAndDelete({ _id: seedid });
});

router.get("/products/myseeds", async (req, res) => {

  const seeds = await Seed.find({ breeder: "638333c0208b3e8157a980e0" });
  res.json(seeds);
});

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

router.post("/products/deleteproduct", async (req, res) => {
  const productid = req.body.id;
  try {
    await Product.findOneAndDelete({ _id: productid });
    res.status(200).send("Product deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/products/addproduct", async (req, res) => {
  const { product } = req.body;
  try {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
    });

    await newProduct.save();
    res.status(201).send("New Product Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/products/getproductbyid", async (req, res) => {
  const productid = req.body.id;
  try {
    const product = await Product.findOne({ _id: productid });
    res.send(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/products/updateproduct", async (req, res) => {
  const product = req.body.updatedProduct;
  const idnew = req.body.updatedProduct._id;
  try {
    const edit = await Product.findOne({ _id: idnew });
    edit.name = product.name;
    edit.price = product.price;
    edit.category = product.category;
    edit.description = product.description;
    edit.brand = product.brand;
    edit.countInStock = product.countInStock;

    const new1 = await edit.save();
    res.status(200).send("Product edited successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/products/addseeds", async (req, res) => {
  const { product } = req.body;
  try {
    const addSeed = new Seed({
      breeder: product.id,
      seedName: product.name,
      quantity: product.quantity,
      date: product.date,
      category: product.category,
      place: product.place,
    });

    const seed = await addSeed.save();
    res.status(201).json(seed);
    res.status(201).send("Seed request sent successfully");
  } catch (error) {
    res.json({ message: error.data });
  }
});

module.exports = router;
