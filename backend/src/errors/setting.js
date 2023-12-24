const { ApiError } = require(".");

class SettingNotFound extends ApiError {
    constructor() {
        super();
        this.code = 404;
        this.message = "Setting not found";
        this.name = "SettingNotFound";
    }
}
module.exports = { SettingNotFound };