const { Router } = require("express");
const { createSetting, updateSetting, getSetting } = require("../controllers/setting.controller");
const settingRouter = Router();

settingRouter.post("/", createSetting);
settingRouter.patch("/:settingId", updateSetting);
settingRouter.get("/:settingId", getSetting);

module.exports = settingRouter;