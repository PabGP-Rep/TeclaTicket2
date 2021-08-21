const Joi = require('joi');
const { loginDTO, altaUsuarioDTO, busquedaUsuarioDTO, actualizacionUsuarioDTO, eliminacionUsuarioDTO } = require('../dto/usuario/usuario.dto');
const { altaPublicacionDTO, actualizacionPublicacionDTO, eliminacionPublicacionDTO } = require('../dto/publicacion/publicacion.dto');
const Usuario = require('../models/usuario.model');
const Publicacion = require('../models/publicacion.model');

//Usuarios
const usuarioExiste = async function(req, res, next) {
  let listaUsuarios = await Usuario.findOne(
      {where: {email: req.body.email}}
  );
  
  if (listaUsuarios != null){
    return res.status(400).json('Usuario ya registrado');    
  }else{
    return next();
  }
}

const checkDatosLogin = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, loginDTO, "Los datos enviados son incorrectos");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});    
  }
}

const checkDatosAlta = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, altaUsuarioDTO, "Los datos enviados son incorrectos");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

const checkDatosBusqueda = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, busquedaUsuarioDTO, "Error");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

const checkDatosActualizacion = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, actualizacionUsuarioDTO, "Error en datos actualizacion");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

const checkDatosEliminacion = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, eliminacionUsuarioDTO, "Error en datos eliminacion");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

///Publicaciones
const chkDatosAltaPublicacion = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, altaPublicacionDTO, "Los datos enviados son incorrectos");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

const chkDatosActualizacionPublicacion = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, actualizacionPublicacionDTO, "Los datos enviados son incorrectos");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

const chkDatosEliminacionPublicacion = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, eliminacionPublicacionDTO, "Los datos enviados son incorrectos");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}

module.exports = { 
  usuarioExiste, checkDatosLogin, checkDatosAlta, checkDatosBusqueda, checkDatosActualizacion, 
  checkDatosEliminacion, chkDatosAltaPublicacion, chkDatosActualizacionPublicacion,
  chkDatosEliminacionPublicacion
};