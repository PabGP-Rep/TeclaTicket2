const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion');
const Usuario = require('./usuario.model');

class Amistad extends Model {}

Amistad.init({
  //Definicion de atributos del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  idUsuarioA: {
    type: DataTypes.INTEGER,   
    references:{
      model: 'Usuario',
      key: 'id'
    },
    allowNull: false,
  },

  idUsuarioB: {
    type: DataTypes.INTEGER,   
    references:{
      model: 'Usuario',
      key: 'id'
    },
    allowNull: false,
  },

  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  estatus: {
    type: DataTypes.INTEGER,   
    allowNull: false,
    defaultValue: 0
  },
},{
  //Opciones extra del modelo
  modelName: 'Amistad',
  tableName: 'Amistades',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  deletedAt: false,
  sequelize,
});

Amistad.belongsTo(Usuario, {as: 'amigoA', foreignKey: 'idUsuarioA'});
Amistad.belongsTo(Usuario, {as: 'amigoB', foreignKey: 'idUsuarioB'});

module.exports = Amistad;