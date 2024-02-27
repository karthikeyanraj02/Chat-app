const jwt = require("jsonwebtoken");

// creating JWT Token

const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRATE, {
    expiresIn: process.env.JWT_EXPRIES,
  });
  // passing through cookie
  res.cookie("AccessToken", token, {
    maxAge: new Date(
      Date.now() + process.env.COKIEES_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });
};

module.exports = generateJwtToken;
