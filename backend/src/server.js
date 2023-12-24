const NODE_ENV = process.env.NODE_ENV || "";
require("dotenv").config({
  path : `../.env.${NODE_ENV}`,
});
const mongoose = require("mongoose");
const { dbUrl, user, pass } = require("./config").getMongoDbConfig();
mongoose
  .connect(dbUrl, {
    user,
    pass,
  })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.error(err);
  });
const app = require("./app");
const { createServer } = require("http");
const PORT = process.env.PORT || 9000;
const server = createServer(app);

server.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
