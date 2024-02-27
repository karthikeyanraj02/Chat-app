const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Hashing password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

//  compare the enterpassword and oldpassword

userSchema.methods.isValidPassword = async function (enterpassword) {
  return await bcrypt.compare(enterpassword, this.password);
};

const User = mongoose.model("UserEmail", userSchema);

module.exports = User;
