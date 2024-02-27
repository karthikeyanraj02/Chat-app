const express = require("express");
const {
  demo,
  sendMessage,
  getMessage,
} = require("../controllers/messageController");
const Router = express.Router();
const protectedRoute = require("../middleware/authorisation");

Router.route("/sendMessage/:id").post(protectedRoute, sendMessage);
Router.route("/getMessage/:id").get(protectedRoute, getMessage);

module.exports = Router;
