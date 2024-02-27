const ConversationModel = require("../model/conversationModel");
const MessageModel = require("../model/messageModel");
const { getReceiverSocketId, io } = require("../socket.io/socket");

exports.sendMessage = async (req, res, next) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await ConversationModel.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = await MessageModel.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Save both conversation and new message
    await Promise.all([conversation.save(), newMessage.save()]);

    // Socket conncetion
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("sendMessage:", error.message);
    res.status(400).json({ error: error.message });
  }
};

exports.getMessage = async (req, res, next) => {
  try {
    const senderId = req.user._id;
    const { id: receiverId } = req.params;

    const conversation = await ConversationModel.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const message = conversation.messages || [];
    return res.status(200).json({ message });
  } catch (error) {
    console.log("getMessage:", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
