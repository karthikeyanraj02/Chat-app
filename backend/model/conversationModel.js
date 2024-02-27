const mongoose = require("mongoose");
const {
  NewFactorListInstance,
} = require("twilio/lib/rest/verify/v2/service/entity/newFactor");

const ConversationalSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserEmail",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("Conversation", ConversationalSchema);

module.exports = conversation;
