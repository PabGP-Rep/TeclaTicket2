const Joi = require('joi');
const { descubrirToken } = require('../services/jwt.service');
const { loginDTO, altaUsuarioDTO, busquedaUsuarioDTO, actualizacionUsuarioDTO, eliminacionUsuarioDTO, busquedaUsuarioIdDTO } = require('../dto/usuario/usuario.dto');
const { altaPublicacionDTO, actualizacionPublicacionDTO, eliminacionPublicacionDTO } = require('../dto/publicacion/publicacion.dto');
const { altaAmistadDTO } = require('../dto/amistad/amistad.dto');
const { Op } = require("sequelize");

const Usuario = require('../models/usuario.model');
const Publicacion = require('../models/publicacion.model');
const Amistad = require('../models/amistad.model');

//TOKEN
const validarToken = async (req, res, next) => {
  try {
    console.log("Recibi:");
    console.log(req.headers);
    
    if (req.headers.authorization != undefined) {
      const token = req.headers.authorization.split(' ')[1];
      const verified = await descubrirToken(token);
      if (verified){
        console.log("token verificado:");
        console.log(verified);
        return next ();
      } 
      else{
        return res.status(403).json('No tienes Permisos');
      }
    }
    else{
      return res.status(403).json('INVALID AUTHORIZATION');
    }
    
  } catch (error) {    
    console.log(error);    
  }
}

const validarTokenAdmin = async (req, res, next) => {
  try {
    console.log("Recibi:");
    console.log(req.headers);
    
    if (req.headers.authorization != undefined) {
      const token = req.headers.authorization.split(' ')[1];
      const verified = await descubrirToken(token);
      if (verified.data.tipo == '1'){
        console.log("token verificado:");
        console.log(verified);
        return next ();
      } 
      else{
        return res.status(403).json('NESECITAS PERMISO DE ADMINISTRADOR')
      }
    }
    else{
      return res.status(403).json('INVALID AUTHORIZATION');
    }
    
  } catch (error) {    
    console.log(error);    
  }
}

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

const checkDatosBusquedaId = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, busquedaUsuarioIdDTO, "Error");
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

//Amistades
const amistadExiste = async function(req, res, next) {
  const { idUsuarioA, idUsuarioB } = req.body; 
  console.log("Me llego");
  console.log(req.body);
  let amistad = await Amistad.findOne({
    where: {
      [Op.or]: 
      [{
        idUsuarioA: idUsuarioA,
        idUsuarioB: idUsuarioB
       },
       { 
        idUsuarioA: idUsuarioB,
        idUsuarioB: idUsuarioA
      }]
    }  
  });
  
  if (amistad){
    return res.status(400).json('Ya hay amistad');    
  }else{
    return next();
  }
}

const chkDatosAltaAmistad = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, altaAmistadDTO, "Error");
    return next();    
  } catch (error) {
    res.status(500).json({error: error.message});  
  }
}



module.exports = { 
  usuarioExiste, checkDatosLogin, checkDatosAlta, checkDatosBusqueda, checkDatosBusquedaId,
   checkDatosActualizacion, checkDatosEliminacion, chkDatosAltaPublicacion, validarToken,
   chkDatosActualizacionPublicacion, chkDatosEliminacionPublicacion, validarTokenAdmin,
   amistadExiste, chkDatosAltaAmistad
};