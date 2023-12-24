const { ApiError } = require(".");

class TransactionNotFound extends ApiError {
    constructor() {
        super();
        this.code = 404;
        this.message = "Transaction not found";
        this.name = "TransactionNotFound";
    }
}

module.exports = { TransactionNotFound }