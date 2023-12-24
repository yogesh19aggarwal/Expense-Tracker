const { ApiError } = require("../errors");

/**
 *
 * @param {ApiError} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
module.exports = function (err, req, res, next) {
  let code = err.code || 500;
  let message = err.message || "Something broke";
  if (err.name === "ValidationError") {
    code = 400;
  }
  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    code = 401
    message = "User not authenticated"
  }
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  return res.status(code).send({
    status: false,
    message,
    data: {
      url: req.originalUrl,
      method: req.method,
      errorCode: err.name || "INTERNAL_ERROR",
    },
  });
};
