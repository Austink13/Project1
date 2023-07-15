//imports
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//connecting to database
const connect = async () => {
  return mongoose.connect(process.env.DB_URL);
};

//use
app.use(express.json());
app.use(cors());

//routes imports
const userRoutes = require("./src/userRoute");

//routes
app.use("/users", userRoutes);

//listening
app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
