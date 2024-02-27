const userModel = require("../model/userModel");
const generateJwtToken = require("../utils/jwt");
const bcrypt = require("bcrypt");

// user Register using email --------------------------- http://localhost:2000/api/email/signup

exports.signUpInEmail = async (req, res, next) => {
  try {
    const { email, userName, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "email is already exits",
      });
    }

    let profilePic = `https://avatar.iran.liara.run/username?username=${userName}`;

    const newUser = await userModel.create({
      email,
      userName,
      password,
      profilePic,
    });

    if (newUser) {
      generateJwtToken(newUser._id, res); // calling jwt token function
      res.status(201).json({
        success: true,
        message: "successfully signedUp!!",
        newUser,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("signUpInEmail", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// user login using email ---------------------------------------http://localhost:2000/api/email/signin

exports.SignInEmail = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "please enter the field",
    });
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "please enter the valid email or password",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
      generateJwtToken(user._id, res);
      res.status(200).json({
        success: true,
        message: "successfully logedIn",
        user,
      });
    } else {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }
  } catch (error) {
    console.log("error in login with email controller,", error.message);
  }
};

// User Logout using Email  -----------------------------------------   http://localhost:2000/api/email/signout
exports.LogoutInEmail = async (req, res, next) => {
  try {
    res.cookie("AccessToken", "", {
      maxAge: 0,
      httpOnly: true,
    });
    res.status(200).json({
      message: "successfully logout",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log("LogoutInEmail:", error.message);
  }
};
