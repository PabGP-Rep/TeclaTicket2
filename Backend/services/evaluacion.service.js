const Evaluacion = require('../models/evaluacion.model');
const Usuario = require('../models/usuario.model');
const { Op } = require("sequelize");

class Review{
  //Metodos del Servicio Review
  createReview = async (
    idUsuarioA, idUsuarioB, basesDeDatos, apis, testings, seguridad,
    teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
    performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
    resolucion, versionado, trelloJira, slack, metodologias, fecha) => {
    try {
      const evaluacion = await Evaluacion.create({ 
        idUsuarioA: idUsuarioA, idUsuarioB: idUsuarioB, basesDeDatos: basesDeDatos,
        apis: apis, testings: testings, seguridad: seguridad, teoriaObjetos: teoriaObjetos,
        nodejs: nodejs, frontend: frontend, swagger: swagger, javascript: javascript, calidad: calidad,
        velocidad: velocidad, performance: performance, enfocado: enfocado, trabajoEquipo: trabajoEquipo,
        comprometido: comprometido, comunicacion: comunicacion, aprendizaje: aprendizaje,
        resolucion: resolucion, versionado: versionado, trelloJira: trelloJira, slack: slack,
        metodologias: metodologias, fecha
      });
      console.log("Evaluacion creada con exito [SERVICE]");
      return evaluacion;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  searchReview = async (idUsuario) => {
    try {
      let encontrado = await Evaluacion.findAll({
        where: {
          [Op.or]: 
          [{
            idUsuarioA: idUsuario
           },
           { 
            idUsuarioB: idUsuario
          }]
        },

        include: [
          {
            as: 'evaluado',
            required: true,
            model: Usuario,
            attributes: ['id', 'nombre', 'apellido', 'imagen'],
          },
          {
            as: 'evaluador',
            required: true,
            model: Usuario,
            attributes: ['id', 'nombre', 'apellido', 'imagen'],
          }
        ]      
                 
      });

      if (encontrado.length != 0) {
        console.log("Consulta exitosa [SERVICE]");
        return encontrado;        
      }else{
       return [];
      }      
    } catch (error) {
      //console.log(error);
      return error;
    }
  }

  listReviews = async () => {
    let evaluaciones = await Evaluacion.findAll();
    console.log("Consulta exitosa [SERVICE]");
    return evaluaciones;  
  }

  updateReview = async (id, basesDeDatos, apis, testings, seguridad,
    teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
    performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
    resolucion, versionado, trelloJira, slack, metodologias, fecha) => {
    try {      
      await Evaluacion.update({
        basesDeDatos: basesDeDatos,
        apis: apis, testings: testings, seguridad: seguridad, teoriaObjetos: teoriaObjetos,
        nodejs: nodejs, frontend: frontend, swagger: swagger, javascript: javascript, calidad: calidad,
        velocidad: velocidad, performance: performance, enfocado: enfocado, trabajoEquipo: trabajoEquipo,
        comprometido: comprometido, comunicacion: comunicacion, aprendizaje: aprendizaje,
        resolucion: resolucion, versionado: versionado, trelloJira: trelloJira, slack: slack,
        metodologias: metodologias, fecha        
      },
      {
        where: { id: id }
      });  
      console.log("Evaluacion actualizada con exito [SERVICE]");
      return "Evaluacion actualizada con exito [SERVICE]";
    } catch (error) {
      console.log(error);
      return error;
    }  
  }

  deleteReview = async (id) => {
    let evaluacion = await Evaluacion.destroy({
      where: { id: id }
    });    
    console.log("Eliminacion exitosa [SERVICE]");
    return 0;  
  }

}

module.exports = Review;