const express = require("express");
const { app } = require("./socket.io/socket");
const dotenv = require("dotenv");
const path = require("path");
const authRoute = require("./routers/authRoutes");
const messageRoute = require("./routers/messageRouter");
const userRouter = require("./routers/userRouter");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "config/.env") });

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// Routers
app.use("/api", authRoute);
app.use("/api", messageRoute);
app.use("/api", userRouter);
