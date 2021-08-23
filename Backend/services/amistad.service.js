const Amistad = require('../models/amistad.model');
const Usuario = require('../models/usuario.model');
const { Op } = require("sequelize");

class Friendship{
  //Metodos del Servicio Friendship
  createFriendship = async (idUsuarioA, idUsuarioB, fecha) => {
    try {
      const amistad = await Amistad.create({ 
        idUsuarioA: idUsuarioA, idUsuarioB: idUsuarioB, fecha: fecha,});
      console.log("Amistad creada con exito [SERVICE]");
      return amistad;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  searchFriendship = async (idUsuario) => {
    try {
      let encontrado = await Amistad.findAll({
        where: {
          [Op.or]: 
          [{
            idUsuarioA: idUsuario
           },
           { 
            idUsuarioB: idUsuario
          }]
        },

        include: [
          {
            as: 'amigoA',
            required: true,
            model: Usuario,
            attributes: ['id', 'nombre', 'apellido', 'imagen'],
          },
          {
            as: 'amigoB',
            required: true,
            model: Usuario,
            attributes: ['id', 'nombre', 'apellido', 'imagen'],
          }
        ]      
                 
      });

      if (encontrado.length != 0) {
        console.log("Consulta exitosa [SERVICE]");
        return encontrado;        
      }else{
       return [];
      }      
    } catch (error) {
      //console.log(error);
      return error;
    }
  }

  listFriendships = async () => {
    let amistades = await Amistad.findAll();
    console.log("Consulta exitosa [SERVICE]");
    return amistades;  
  }

  updateFriendship = async (id, estatus) => {
    try {      
      await Amistad.update({ estatus: estatus },
      {
        where: { id: id }
      });  
      console.log("Amistad actualizada con exito [SERVICE]");
      return "Amistad actualizada con exito [SERVICE]";
    } catch (error) {
      console.log(error);
      return error;
    }  
  }

  deleteFriendship = async (id) => {
    let amistad = await Amistad.destroy({
      where: { id: id }
    });    
    console.log("Eliminacion exitosa [SERVICE]");
    return 0;  
  }

}

module.exports = Friendship;