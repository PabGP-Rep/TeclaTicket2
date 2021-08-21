const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion');

class Usuario extends Model {}

Usuario.init({
  //Definicion de atributos del modelo
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },

  pass: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  pais: {
    type: DataTypes.STRING,
    allowNull: false
  },

  ciudad: {
    type: DataTypes.STRING,
    allowNull: false
  },

  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },

  estudios: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },

  idiomas: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },

  linkedin: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },

  hobbies: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },

  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },

}, {
  //Opciones extra del modelo
  modelName: 'Usuario',
  tableName: 'Usuarios',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  deletedAt: false,
  sequelize,
});



module.exports = Usuario;