const { chkDatosAltaPublicacion, chkDatosActualizacionPublicacion, chkDatosEliminacionPublicacion } = require('../middlewares/index');
const { crearPublicacion, listarPublicaciones, buscarPublicaciones, actualizarPublicacion, eliminarPublicacion } = require('../controllers/publicacion.controller');

module.exports = (app) => {

  app.post('/publicacion/create', chkDatosAltaPublicacion, crearPublicacion);

  app.get('/publicacion/list', listarPublicaciones);

  app.post('/publicacion/search', buscarPublicaciones);

  app.post('/publicacion/update', chkDatosActualizacionPublicacion, actualizarPublicacion);

  app.post('/publicacion/delete', chkDatosEliminacionPublicacion, eliminarPublicacion);

}