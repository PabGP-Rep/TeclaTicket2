const { DataTypes, Model, Deferrable  } = require('sequelize');
const sequelize = require('../db/conexion');
const Usuario = require('./usuario.model');

class Publicacion extends Model {}

Publicacion.init({
  //Definicion de atributos del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  idUsuario: {
    type: DataTypes.INTEGER,   
    references:{
      model: 'Usuario',
      key: 'id'
    },
    allowNull: false,
  },

  contenido: {
    type: DataTypes.STRING,
    allowNull: false
  },

  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }

}, {
  //Opciones extra del modelo
  modelName: 'Publicacion',
  tableName: 'Post',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  deletedAt: false,
  sequelize,
});

Publicacion.belongsTo(Usuario, {foreignKey: 'idUsuario'});

module.exports = Publicacion;