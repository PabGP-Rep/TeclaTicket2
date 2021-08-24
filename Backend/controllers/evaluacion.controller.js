const Review = require('../services/evaluacion.service');
const reviewService = new Review();

const crearEvaluacion = async (req, res) => {
  const { idUsuarioA, idUsuarioB, basesDeDatos, apis, testings, seguridad,
    teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
    performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
    resolucion, versionado, trelloJira, slack, metodologias, fecha } = req.body;
  try {
    await reviewService.createReview(
      idUsuarioA, idUsuarioB, basesDeDatos, apis, testings, seguridad,
      teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
      performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
      resolucion, versionado, trelloJira, slack, metodologias, fecha);
    console.log("Evaluacion exitosa [CONTROLLER]");
    res.status(201).json('Evaluacion realizada');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const listarEvaluaciones = async (req, res) =>{
  try {
    let listaEvaluaciones = await reviewService.listReviews();
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaEvaluaciones);
  } catch (error) {
    return res.status(500);
  }
}

const buscarEvaluacion = async (req, res) =>{
  const idUsuario = req.body.idUsuario;
  try {
    let listaEvaluaciones = await reviewService.searchReview(idUsuario);
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaEvaluaciones);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const actualizarEvaluacion = async (req, res) => {
  const { id, basesDeDatos, apis, testings, seguridad,
    teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
    performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
    resolucion, versionado, trelloJira, slack, metodologias, fecha } = req.body;
  try {
    await reviewService.updateReview(id, basesDeDatos, apis, testings, seguridad,
      teoriaObjetos, nodejs, frontend, swagger, javascript, calidad, velocidad,
      performance, enfocado, trabajoEquipo, comprometido, comunicacion, aprendizaje,
      resolucion, versionado, trelloJira, slack, metodologias, fecha);
    console.log("Review actualizada con exito [CONTROLLER]");
    res.status(201).json('Review actualizada con Exito');
  } catch (error) {
    return res.status(500);
  }
}

const eliminarEvaluacion = async (req, res) =>{
  const id = req.body.id;
  try {
    await reviewService.deleteReview(id);
    console.log("Eliminacion exitosa [CONTROLLER]");
    res.status(200).json('Review Eliminada');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}



module.exports = { crearEvaluacion, listarEvaluaciones, buscarEvaluacion, actualizarEvaluacion, eliminarEvaluacion }