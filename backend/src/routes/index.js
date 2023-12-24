const { Router } = require("express");
const userRouter = require("./user.router");
const transactionRouter = require("./transaction.router");
const authenticationMiddleware = require("../middlewares/authentication.middleware");
const settingRouter = require("./setting.router");
const routes = Router();

routes.get("/api/v1/health", (_, res) => {
    return res.status(200).json({ status: true, message: "Server is healthy" })
})
routes.use("/api/v1/auth", userRouter);
routes.use("/api/v1/transactions", authenticationMiddleware, transactionRouter);
routes.use("/api/v1/settings", authenticationMiddleware, settingRouter);
module.exports = routes;