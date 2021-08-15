const Joi = require('joi');

module.exports.loginDTO = Joi.object().keys({
  email: Joi.string().email().required(),
  pass: Joi.string().required()
});

module.exports.altaUsuarioDTO = Joi.object().keys({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  pass: Joi.string().required(),
  email: Joi.string().email().required(),
  pais: Joi.string().required(),
  ciudad: Joi.string().required(),
  edad: Joi.number().integer().positive().required()
});

module.exports.busquedaUsuarioDTO = Joi.object().keys({
  nombre: Joi.string().required()
});

module.exports.actualizacionUsuarioDTO = Joi.object().keys({
  id: Joi.number().integer().positive().required(),
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  pais: Joi.string().required(),
  ciudad: Joi.string().required(),
  edad: Joi.number().integer().positive().required(),
  imagen: Joi.string().allow('').required(),
  estudios: Joi.string().allow('').required(),
  idiomas: Joi.string().allow('').required(),
  linkedin: Joi.string().allow('').required(),
  hobbies: Joi.string().allow('').required(),
});

module.exports.eliminacionUsuarioDTO = Joi.object().keys({
  id: Joi.number().integer().positive().required()
});