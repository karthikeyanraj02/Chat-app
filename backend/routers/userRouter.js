const express = require("express");
const { allUsers } = require("../controllers/userController");
const Router = express.Router();
const protectedRoute = require("../middleware/authorisation");

Router.route("/alluser").get(protectedRoute, allUsers);

module.exports = Router;
