const { Schema, model } = require("mongoose");
const UserRepository = require("../repository/user.repository");
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength : 3,
        maxLength : 50,
    },
    email: {
        type: String,
        index: true,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false,
    },
});
userSchema.loadClass(UserRepository);
const User = model("User", userSchema);
module.exports = User;