const Usuario = require('./usuario.model');
const Publicacion = require('./publicacion.model');
const sequelize = require('../db/conexion');

Usuario.hasMany(Publicacion, {foreignKey: 'idUsuario'});
//Publicacion.belongsTo(Usuario, {foreignKey: 'idUsuariosadawd'});