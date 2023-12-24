const { Router } = require("express");
const { currentUser, login, register, userSettings, logout } = require("../controllers/user.controller");
const authenticationMiddleware = require("../middlewares/authentication.middleware");
const userRouter = Router();

userRouter.get("/", authenticationMiddleware, currentUser);
userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/settings", authenticationMiddleware, userSettings);
userRouter.post("/logout", authenticationMiddleware, logout);
module.exports = userRouter;