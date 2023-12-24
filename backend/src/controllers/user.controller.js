const gravatar = require('gravatar');
const requestAsyncHandler = require("../handlers/async.handler");
const { loginSchema, registerSchema } = require("../validator/users.validator");
const User = require("../models/User");
const EncDec = require("../repository/encdec.repository");
const {
  UserNotFound,
  DuplicateUser,
  PasswordDoesNotMatch,
} = require("../errors/users");
const Setting = require('../models/Setting');
const { SettingNotFound } = require('../errors/setting');
/**
 *
 * @type {import("express").Handler}
 */
exports.currentUser = function (req, res) {
  return res.status(200).json({ status: true, data: req.user });
};

/**
 *
 * @type {import("express").Handler}
 */
exports.login = requestAsyncHandler(async (req, res) => {
  const userBody = await loginSchema.validateAsync(req.body);
  const { email, password } = userBody;
  const user = await User.getUserByEmail(email);
  if (!user) throw new UserNotFound();
  const isPasswordMatching = await EncDec.checkIfPasswordAndHashedPasswordSame(
    password,
    user.password
  );
  if (!isPasswordMatching) throw new PasswordDoesNotMatch();
  const userPayload = { name: user.name, email, _id: user._id, avatar: user.avatar };
  const token = EncDec.getToken(userPayload);
  return res
    .status(200)
    .json({ status: true, data: { ...userPayload, token } });
});
/**
 *
 * @type {import("express").Handler}
 */
exports.register = requestAsyncHandler(async (req, res) => {
  const registerBody = await registerSchema.validateAsync(req.body);
  const { email, name, password } = registerBody;
  const user = await User.getUserByEmail(email);
  if (user) throw new DuplicateUser();
  const avatar = gravatar.url(email, { protocol: 'http', s: '100' });
  const registerdUser = await User.makeUser({ email, password, name, avatar });
  await Setting.createSetting({ user: registerdUser._id, currencyCode: "INR", countryCode: "IN" });
  return res.status(201).json({
    status: true,
    data: { email, name },
    message: "User registered successfully",
  });
});
exports.userSettings = requestAsyncHandler(async (req, res) => {
  const setting = await Setting.findOne({ user: req.user._id });
  if (!setting) {
    throw new SettingNotFound();
  }
  return res.status(200).json({ status: true, data: setting });
})

exports.logout = requestAsyncHandler(async (req, res) => {
  req.user = null;
  return res.status(200).json({ status: true, message: "Logout success" });
})