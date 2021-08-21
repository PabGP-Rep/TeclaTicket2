const Joi = require('joi');

module.exports.altaPublicacionDTO = Joi.object().keys({
  idUsuario: Joi.number().positive().integer().required(),
  contenido: Joi.string().required(),
  fecha: Joi.date().required(),
});

module.exports.actualizacionPublicacionDTO = Joi.object().keys({
  id: Joi.number().integer().positive().required(),
  contenido: Joi.string().required()
});

module.exports.eliminacionPublicacionDTO = Joi.object().keys({
  id: Joi.number().integer().positive().required()
});