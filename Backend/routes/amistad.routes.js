const { crearAmistad, listarAmistades, buscarAmistad, actualizarAmistad, eliminarAmistad } = require('../controllers/amistad.controller');
const { amistadExiste, chkDatosAltaAmistad, validarToken, validarTokenAdmin } = require('../middlewares/index');

module.exports = (app) => {

  app.post('/amistad/create', validarToken, chkDatosAltaAmistad, amistadExiste, crearAmistad);

  app.get('/amistad/list', validarTokenAdmin, listarAmistades);

  app.post('/amistad/search', validarToken, buscarAmistad);

  app.post('/amistad/update', validarToken, actualizarAmistad);

  app.post('/amistad/delete', validarToken, eliminarAmistad);

}