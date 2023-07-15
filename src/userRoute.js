const User = require("./userModel");
const express = require("express");
const app = express.Router();

//post user
app.post("/new", async (req, res) => {
  try {
    const { email, aadhar, contact } = req.body;
    const getUser = await User.findOne({ email, contact, aadhar });
    if (getUser) {
      return res.send({ message: "User already exists" });
    }
    const user = await User.create({ ...req.body });
    return res.send({ message: user });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

//get users
app.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(404).send({ message: "error" });
  }
});

module.exports = app;
