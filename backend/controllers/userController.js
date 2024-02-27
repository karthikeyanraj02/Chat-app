const userModel = require("../model/userModel");

exports.allUsers = async (req, res, next) => {
  try {
    const userLogedIn = req.user._id;
    const user = await userModel
      .find({ _id: { $ne: userLogedIn } })
      .select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("allUsers:", error.message);
    res.status(400).json({
      error: error.message,
    });
  }
};
