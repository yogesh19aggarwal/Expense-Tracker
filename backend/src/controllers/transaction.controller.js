const { isValidObjectId } = require("mongoose");
const requestAsyncHandler = require("../handlers/async.handler");
const Transaction = require("../models/Transaction");
const { transactionDto } = require("../validator/transaction.validator");
const { TransactionNotFound } = require("../errors/transaction");
const { Types } = require("mongoose");

exports.createTransaction = requestAsyncHandler(async (req, res) => {
    const transactionBody = await transactionDto.validateAsync(req.body);
    const transaction = { ...transactionBody, user: req.user._id };
    const newTransaction = await Transaction.createNew(transaction);
    return res.status(201).json({ status: true, message: `New transaction added`, data: newTransaction })
})

exports.getAllTransactions = requestAsyncHandler(async (req, res) => {
    const { filter, limit, select, skip } = req.query;
    const transactions = await Transaction.find(filter).sort({ _id: -1 }).select(select).skip(skip).limit(limit);
    const count = await Transaction.countDocuments(filter);
    return res.status(200).json({ status: true, data: { transactions, limit, skip, count } })
})

exports.getTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const transaction = await Transaction.findOne({ user: req.user._id, _id: req.params.transactionId });
    if (!transaction) {
        throw new TransactionNotFound();
    }
    return res.status(200).json({ status: true, data: transaction })
})

exports.updateTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const transactionBody = await transactionDto.validateAsync(req.body);

    const updatedTransaction = await Transaction.findOneAndUpdate({ _id: req.params.transactionId, user: req.user._id }, transactionBody, { new: true });
    if (!updatedTransaction) {
        throw new TransactionNotFound();
    }
    return res.status(201).json({ status: true, message: `Transaction updated with id : ${transactionId}`, data: updatedTransaction })

})

exports.deleteTransaction = requestAsyncHandler(async (req, res) => {
    const transactionId = req.params.transactionId;
    if (!isValidObjectId(transactionId)) {
        throw new TransactionNotFound();
    }
    const deletedTransaction = await Transaction.findOneAndDelete({ user: req.user._id, _id: transactionId });
    if (!deletedTransaction) {
        throw new TransactionNotFound();
    };
    return res.status(200).json({ status: true, message: "Success" })
})


exports.insertManyTransactions = requestAsyncHandler(async (req, res, next) => {
    await Transaction.insertMany(req.body.map(tra => ({ ...tra, user: req.user._id })));
    return res.status(200).send("Success");
})

exports.getDashboardReport = requestAsyncHandler(async (req, res, next) => {
    const oneWeekAgo = new Date();
    const DAYS_IN_WEEK = 7;
    oneWeekAgo.setDate(oneWeekAgo.getDate() - DAYS_IN_WEEK);
    const weeklyReport = await Transaction.aggregate([
        {
            $match: {
                user: new Types.ObjectId(req.user._id),
                date: { $gte: oneWeekAgo },
            },
        },
        {
            $group: {
                _id: {
                    category: "$category"
                },
                totalIncome: {
                    $sum: {
                        $cond: { if: { $eq: ['$type', 'income'] }, then: '$amount', else: 0 },
                    },
                },
                totalExpense: {
                    $sum: {
                        $cond: { if: { $eq: ['$type', 'expense'] }, then: '$amount', else: 0 },
                    },
                },
            },
        },
        {
            $project: {
                category: "$_id.category",
                totalIncome: 1,
                totalExpense: 1,
                _id: 0,
            }
        }
    ])
    const totalIncome = weeklyReport.reduce((prev, saving) => prev + saving.totalIncome, 0);
    const totalExpense = weeklyReport.reduce((prev, saving) => prev + saving.totalExpense, 0);
    return res.status(200).json({ data: { weeklyReport, totalIncome, totalExpense }, status: true })
})