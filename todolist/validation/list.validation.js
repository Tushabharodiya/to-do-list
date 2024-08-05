let Joi = require("joi");

let list = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        completed: Joi.boolean(),
        date: Joi.string(),
    }),
};

module.exports = { list };