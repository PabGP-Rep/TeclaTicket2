const { chkDatosAltaPublicacion, chkDatosActualizacionPublicacion, chkDatosEliminacionPublicacion, validarTokenAdmin, validarToken } = require('../middlewares/index');
const { crearPublicacion, listarPublicaciones, buscarPublicaciones, actualizarPublicacion, eliminarPublicacion } = require('../controllers/publicacion.controller');

module.exports = (app) => {

  app.post('/publicacion/create', validarToken, chkDatosAltaPublicacion, crearPublicacion);

  app.get('/publicacion/list', validarTokenAdmin, listarPublicaciones);

  app.post('/publicacion/search', validarToken, buscarPublicaciones);

  app.post('/publicacion/update', validarToken, chkDatosActualizacionPublicacion, actualizarPublicacion);

  app.post('/publicacion/delete', validarToken, chkDatosEliminacionPublicacion, eliminarPublicacion);

}