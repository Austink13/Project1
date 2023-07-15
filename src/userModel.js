const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    aadhar: {
      type: Number,
      required: true,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialAbility: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    belongTo: {
      type: String,
      required: true,
    },
    skillPreferenceOne: {
      type: String,
      required: true,
    },
    skillPreferenceTwo: {
      type: String,
      required: true,
    },
    skillPreferenceThree: {
      type: String,
      required: true,
    },
    residentialCourse: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
