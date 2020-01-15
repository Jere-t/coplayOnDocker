// schemas/user/update.js

//Joi with date extension
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

module.exports = Joi.object().keys(
    {
        idUser: Joi.number().integer().required(),
        username: Joi.string().max(100).min(2).required(),
        passwordHash: Joi.string().max(255).min(2).required(),  //--> PATCH ???
        firstname: Joi.string().max(255).min(2).required(),
        lastname: Joi.string().max(255).min(2).required(),
        email: Joi.string().email({ minDomainAtoms: 2 }).max(255).min(2).required(),
        userBirthday: Joi.date(),

    });
