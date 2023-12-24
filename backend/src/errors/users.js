const { ApiError } = require(".");

class UserNotFound extends ApiError {
  constructor() {
    super();
    this.code = 404;
    this.message = "User not found";
    this.name = "UserNotFound";
  }
}

class UnAuthenticated extends ApiError {
  constructor() {
    super();
    this.code = 401;
    this.message = "User not authenticated";
    this.name = "UnAuthenticated";
  }
}

class DuplicateUser extends ApiError {
  constructor() {
    super();
    this.code = 400;
    this.message = "User already exists";
    this.name = "DuplicateUser";
  }
}
class PasswordDoesNotMatch extends ApiError {
  constructor() {
    super();
    this.code = 400;
    this.message = "Password does not match";
    this.name = "PasswordDoesNotMatch";
  }
}

module.exports = {
  UserNotFound,
  DuplicateUser,
  PasswordDoesNotMatch,
  UnAuthenticated,
};
