// const mongoose = require("mongoose");
// const validator = require("validator");

// const userMobSchema = mongoose.Schema(
//   {
//     mobileNo: {
//       type: Number,
//       required: [true, "please enter the mobile number"],
//       validator: [
//         validator.isMobilePhone,
//         "please enter the valid Mobile number",
//       ],
//       unique: true,
//     },
//     userName: {
//       type: String,
//       required: true,
//     },
//     profilePic: {
//       type: String,
//       default: "",
//     },
//     OTP: {
//       type: Number,
//       default: "",
//     },
//   },
//   { timestamps: true }
// );

// const usermob = mongoose.model("UserMobile", userMobSchema);

// module.exports = usermob;
