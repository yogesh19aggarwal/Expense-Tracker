const express = require("express");
const notfoundHandler = require("./handlers/notfound.handler");
const cors = require("cors");
const morgan = require('morgan')

const errorHandler = require("./handlers/error.handler");
const routes = require("./routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === "devlopment" ? "dev" : "combined"))
app.use(routes);
app.all("*", notfoundHandler)
app.use(errorHandler);
module.exports = app;