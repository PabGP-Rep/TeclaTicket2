const { crearEvaluacion, listarEvaluaciones, buscarEvaluacion, actualizarEvaluacion, eliminarEvaluacion } = require('../controllers/evaluacion.controller');
const { validarToken, validarTokenAdmin } = require('../middlewares/index');

module.exports = (app) => {

  app.post('/amistad/create', validarToken, crearEvaluacion);

  app.get('/amistad/list', validarTokenAdmin, listarEvaluaciones);

  app.post('/amistad/search', validarToken, buscarEvaluacion);

  app.post('/amistad/update', validarToken, actualizarEvaluacion);

  app.post('/amistad/delete', validarToken, eliminarEvaluacion);

}