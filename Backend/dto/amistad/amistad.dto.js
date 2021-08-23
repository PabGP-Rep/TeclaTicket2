const Joi = require('joi');

module.exports.altaAmistadDTO = Joi.object().keys({
  idUsuarioA: Joi.number().positive().integer().required(),
  idUsuarioB: Joi.number().positive().integer().disallow(Joi.ref('idUsuarioA')).required(),  
  fecha: Joi.date().required(),
});