const Joi = require("joi");

const settingDto = Joi.object({
    currencyCode: Joi.string().max(5).required(),
    countryCode: Joi.string().max(5).required()
})

module.exports = { settingDto }