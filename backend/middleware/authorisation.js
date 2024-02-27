const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

const authorisation = async (req, res, next) => {
  try {
    const token = req.cookies.AccessToken; // getting token from cookies

    if (!token) {
      return res.status(400).json({
        message: "Unathorize user no token is provided please login",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRATE); // verify the token

    if (!decode) {
      return res.status(401).status({
        message: " Unathorize token is in valid ",
      });
    }

    const user = await userModel.findById(decode.userId); // geting user id by decode

    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("authorisation:", error.message);
    return res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = authorisation;
