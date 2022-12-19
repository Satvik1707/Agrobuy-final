const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");
const User = require("../models/UserModel");
const Breeder = require("../models/BreederModel");
const Transport = require("../models/TransportModel");
const Token = require("../models/Token");

const router = express.Router();

//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);

//get user profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// router.use("/auth", )

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
router.post("/deletebreeder", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
router.post("/deletetransport", async (req, res) => {
  const userid = req.body.userid;
  try {
    await User.findOneAndDelete({ _id: userid });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/createbreeder", async (req, res) => {
  const { user } = req.body;
  const idnew = user._id;
  try {
    const loggedin = await User.findOne({ id: idnew });
    const newBreeder = new Breeder({
      user: loggedin.id,
      email: loggedin.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address1: user.address1,
      address2: user.address2,
      cityName: user.city,
      state: user.state,
      pincode: user.pincode,
      phoneNo: user.phnNo,
    });
    const createbreeder = await newBreeder.save();
    res.status(201).json(createbreeder);
    res.status(201).send("Breeder registration request sent");
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.post("/getbreederbyid", async (req, res) => {
  const userid = req.body.id;
  try {
    const user = await Breeder.findOne({ user: userid });
    res.json({ user });
  } catch (error) {
    res.json({ messaage: error });
  }
});

router.post("/createtransport", async (req, res) => {
  const { user } = req.body;
  const idnew = user.id;

  try {
    const loggedin = await User.findOne({ _id: idnew });

    const newBreeder = new Transport({
      user: loggedin.id,
      email: loggedin.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address1: user.address1,
      address2: user.address2,
      cityName: user.city,
      state: user.state,
      pincode: user.pincode,
      phoneNo: user.phnNo,
    });
    const createbreeder = await newBreeder.save();
    res.status(201).json(createbreeder);
    res.status(201).send("Breeder registration request sent");
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.get("/breederlist", async (req, res) => {
  try {
    const users = await Breeder.find({});

    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
router.get("/transportlist", async (req, res) => {
  try {
    const users = await Transport.find({});

    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post("/denybreeder", async (req, res) => {
  try {
    const userid = req.body.id;
    const res = await Breeder.findOneAndDelete({ _id: userid });
    res.status(200).send("Breeder Rejected");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/denytransport", async (req, res) => {
  try {
    const userid = req.body.id;
    const res = await Transport.findOneAndDelete({ _id: userid });
    res.status(200).send("Transporter Rejected");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/approvebreeder", async (req, res) => {
  try {
    const userid = req.body.id;
    // console.log(userid);
    const breeder = await Breeder.findOne({ _id: userid });
    const user = breeder.user;
    // console.log(user);
    const userupdate = await User.findOne({ _id: user });
    // console.log(userupdate);
    userupdate.isBreeder = true;
    await userupdate.save();
    await Breeder.findOneAndDelete({ _id: userid });
    res.status(200).send("Breeder accepted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/approvetransport", async (req, res) => {
  try {
    const userid = req.body.id;
    // console.log(userid);
    const breeder = await Transport.findOne({ _id: userid });
    const user = breeder.user;
    // console.log(user);
    const userupdate = await User.findOne({ _id: user });
    // console.log(userupdate);
    userupdate.isTransport = true;
    await userupdate.save();
    await Transport.findOneAndDelete({ _id: userid });
    res.status(200).send("Breeder accepted");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/getallbreeders", async (req, res) => {
  try {
    const users = await User.find({ isBreeder: true });
    // console.log(users);
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
router.get("/getalltransport", async (req, res) => {
  try {
    const users = await User.find({ isTransport: true });
    // console.log(users);
    res.send(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get("/:id/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id})
    if(!user){
      return res.status(400).send({message: "Invalid Link"})
    }

    const token = await Token.find({
      userId: user._id,
      token: req.params.token,
    })

    if(!token){
      return res.status(400).send({message: "Invalid Link"})
    }

    await User.updateOne({_id: user.id, verified: true})
    await token.remove()

    res.status(200).send({message:"Email verified"})
  } catch (error) {
    res.status(401).send({message:"Email not verified"})
  }
})

module.exports = router;
