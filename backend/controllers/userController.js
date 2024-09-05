import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @desc Auth & Login user
// @route POST/api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  //   console.log(req.body);
  //   res.send("auth user");
});
// @desc Login user
// @route POST/api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logut user
// @route POST/api/users/logut
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// @desc User profile
// @route GET/api/users
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc Update User profile
// @route PUT/api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc  Users
// @route GET/api/users
// @access Public/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc  get User by id
// @route GET/api/users/:id
// @access Public/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc  Delete Users
// @route DELETE/api/users/:id
// @access Public/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user by id");
});

// @desc  Update User
// @route PUT/api/users/:id
// @access Public/Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.send("update user by id");
});

export {
  authUser,
  registerUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUserById,
  updateUserProfile,
  deleteUser,
  logoutUser,
};
