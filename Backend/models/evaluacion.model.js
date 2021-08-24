const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/conexion');
const Usuario = require('./usuario.model');

class Evaluacion extends Model {}

Evaluacion.init({
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

  basesDeDatos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  apis: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  testings: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  seguridad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  teoriaObjetos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  nodejs: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  frontend: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  swagger: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  javascript: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  calidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  velocidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  performance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  enfocado: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  trabajoEquipo: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  comprometido: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  comunicacion: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  aprendizaje: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  resolucion: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  versionado: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  trelloJira: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  slack: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  metodologias: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  fecha: { type: DataTypes.DATEONLY, allowNull: false },
},{
  //Opciones extra del modelo
  modelName: 'Evaluacion',
  tableName: 'Evaluaciones',
  timestamps: false,
  createdAt: false,
  updatedAt: false,
  deletedAt: false,
  sequelize,
});

Evaluacion.belongsTo(Usuario, {as: 'evaluado', foreignKey: 'idUsuarioA'});
Evaluacion.belongsTo(Usuario, {as: 'evaluador', foreignKey: 'idUsuarioB'});

module.exports = Evaluacion;