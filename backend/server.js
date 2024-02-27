const app = require("./app");
const databaseConnection = require("./config/database");
const { server } = require("./socket.io/socket");
databaseConnection();

server.listen(2000, () => {
  try {
    console.log(
      `Server connected successfully and running in ${process.env.PORT} and the environment is ${process.env.NODE_ENV}`
    );
  } catch (error) {
    console.log(error);
  }
});
