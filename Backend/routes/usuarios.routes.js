const { usuarioExiste, checkDatosLogin, checkDatosAlta, checkDatosBusqueda, checkDatosActualizacion, checkDatosEliminacion, checkDatosBusquedaId, validarToken, validarTokenAdmin } = require('../middlewares/index');
const { crearUsuario, listarUsuarios, loginUsuario, buscarUsuarios, actualizarUsuario, eliminarUsuario, buscarUsuario } = require('../controllers/usuario.controller');

module.exports = (app) => {

  app.post('/usuario/create', validarToken, checkDatosAlta, usuarioExiste, crearUsuario);

  app.post('/usuario/login', checkDatosLogin, loginUsuario);

  app.get('/usuario/list', validarTokenAdmin, listarUsuarios);

  app.post('/usuario/search', validarToken, checkDatosBusqueda, buscarUsuarios);

  app.post('/usuario/search/id', validarToken, checkDatosBusquedaId, buscarUsuario);

  app.post('/usuario/update', validarToken, checkDatosActualizacion, actualizarUsuario);

  app.post('/usuario/delete', validarTokenAdmin, checkDatosEliminacion, eliminarUsuario);
}