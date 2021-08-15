const { usuarioExiste, checkDatosLogin, checkDatosAlta, checkDatosBusqueda, checkDatosActualizacion, checkDatosEliminacion } = require('../middlewares/index');
const { crearUsuario, listarUsuarios, loginUsuario, buscarUsuarios, actualizarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');

module.exports = (app) => {

  app.post('/usuario/create', checkDatosAlta, usuarioExiste, crearUsuario);

  app.post('/usuario/login', checkDatosLogin, loginUsuario);

  app.get('/usuario/list', listarUsuarios);

  app.get('/usuario/search', checkDatosBusqueda, buscarUsuarios);

  app.post('/usuario/update', checkDatosActualizacion, actualizarUsuario);

  app.post('/usuario/delete', checkDatosEliminacion, eliminarUsuario);
}