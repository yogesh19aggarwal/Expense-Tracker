const { Schema, model, Types } = require("mongoose");
const TransactionRepository = require("../repository/transaction.repository");
const transactionSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  description: {
    type: String,
    maxLength: 250,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true
  },
  category: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false,
  timestamps: true
});
transactionSchema.loadClass(TransactionRepository);
transactionSchema.index({ title: "text", description: "text" })
const Transaction = model("Transaction", transactionSchema);
module.exports = Transaction;
