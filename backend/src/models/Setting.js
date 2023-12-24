const { Schema, Types, model } = require("mongoose");
const SettingRepository = require("../repository/setting.repository");

const settingSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User",
        unique: true,
        required: true
    },
    currencyCode: {
        type: String,
        required: true,
        maxLength: 5
    },
    countryCode: {
        type: String,
        required: true,
        maxLength: 5
    }
})
settingSchema.loadClass(SettingRepository);

const Setting = model("Setting", settingSchema);

module.exports = Setting;