class ApiError extends Error {
  constructor() {
    super("Internal server error");
    this.code = 500;
    this.name = "INTERNAL_SERVER_ERROR";
  }
}
module.exports = { ApiError };
