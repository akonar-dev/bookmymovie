const express = require("express");
const authRouter = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);
    if (!newUser) {
      return res.status(404).json({ messsage: "User not created" });
    }
    res.status(201).json({ status: "success", user: newUser });
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
        res.status(200).json({
          loggedIn: true,
          message: "User logged in successfully",
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

module.exports = authRouter;
