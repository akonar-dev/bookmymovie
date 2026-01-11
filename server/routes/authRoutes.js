const express = require("express");
const authRouter = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const isAuth = require("../middlewares/authMiddleware")

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.status(404).json({ messsage: "User not created" });
    }
    res.status(201).json({ status: "success", user: newUser});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email: email });
    if (!userFound) {
      return res.status(401).json({
        success: false,
        message: "User not found. Please register user.",
      });
    } else {
      if (bcrypt.compareSync(password, userFound.password)) {
        const token = jwt.sign({userId : userFound._id},process.env.JWT_SECRET_KEY)
        return res
          .cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/",
          })
          .status(200)
          .json({
            loggedIn: true,
            message: "User logged in successfully",
            user: userFound,
          });
      } else {
        res.status(401).json({
          loggedIn: false,
          message: "Password incorrect",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

authRouter.get("/current-user",isAuth, async (req,res) => {
  const userId = req.userId
  const user = await User.findOne({ _id: userId });
  return res.json({user})
})

module.exports = authRouter;
