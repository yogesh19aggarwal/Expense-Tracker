const { isValidObjectId } = require("mongoose");
const { SettingNotFound } = require("../errors/setting");
const requestAsyncHandler = require("../handlers/async.handler");
const Setting = require("../models/Setting");
const { settingDto } = require("../validator/setting.validator");

exports.createSetting = requestAsyncHandler(async (req, res) => {
    const setting = await settingDto.validateAsync(req.body);
    const newUserSetting = await Setting.createSetting({ ...setting, user: req.user._id });
    return res.status(201).json({ status: true, data: newUserSetting, message: "Setting updated !" })
})

exports.updateSetting = requestAsyncHandler(async (req, res) => {
    const settingId = req.params.settingId;
    if (!isValidObjectId(settingId)) {
        throw new SettingNotFound();
    }
    const setting = await settingDto.validateAsync(req.body);
    const updatedSetting = await Setting.findOneAndUpdate({ user: req.user._id, _id: settingId }, setting, { new: true });
    if (!updatedSetting) {
        throw new SettingNotFound();
    }
    return res.status(200).json({ status: true, data: updatedSetting, message: "Settings updated" })
})

exports.getSetting = requestAsyncHandler(async (req, res) => {
    const settingId = req.params.settingId;
    if (isValidObjectId(settingId)) {
        throw new SettingNotFound();
    }
    const setting = await Setting.findOne({ user: req.user._id, _id: settingId })
    if (!setting) {
        throw new SettingNotFound();
    }
    return res.status(200).json({ status: true, data: setting });
})
