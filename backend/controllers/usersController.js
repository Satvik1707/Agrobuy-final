const User = require("../models/UserModel");
const Token = require("../models/Token") 
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const sendMail = require("../utils/sendEmail")
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists!");
  }

  let user = await User.create({ name, email, password });

  const token = await new Token({
    userId: user._id, 
    token: crypto.randomBytes(32).toString("hex") 
  }).save()

  const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`
  await sendEmail(user.email,"Verify Email", url);
  

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      isBreeder: user.isBreeder,
      isTransport: user.isTransport,
      isFCI: user.isFCI,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      isBreeder: user.isBreeder,
      isTransport: user.isTransport,
      isFCI: user.isFCI,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isBreeder: user.isBreeder,
      isTransport: user.isTransport,
      isFCI: user.isFCI,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user Not Found!");
  }
});

module.exports = {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
};
