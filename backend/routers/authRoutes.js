const {
  signUpInEmail,

  SignInEmail,

  LogoutInEmail,
} = require("../controllers/authController");

const express = require("express");
const Router = express.Router();

//------------signUP-----------------------------------
Router.route("/email/signup").post(signUpInEmail);

//-------------signIN-----------------------------------
Router.route("/email/signin").post(SignInEmail);

//------------SignOut-----------------------------------------
Router.route("/email/signout").get(LogoutInEmail);

module.exports = Router;
