const Joi = require("joi");

const transactionDto = Joi.object({
    amount: Joi.number().required().label("Amount"),
    date: Joi.date().optional().label("Date of transaction"),
    title: Joi.string().min(3).max(100).required().label("Title"),
    description: Joi.string().allow("").max(250).optional().label("Description"),
    type: Joi.string().allow("income", "expense").required().label("Type"),
    category: Joi.string().min(2).max(50).required().label("Category")
})

module.exports = { transactionDto }