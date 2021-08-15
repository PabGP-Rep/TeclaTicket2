const Usuario = require('../models/usuario.model');
const { Op, where } = require("sequelize");

class User {
  //Metodos del Servicio User
  createUser = async (nombre, apellido, pass, email, pais, ciudad, edad) => {
    try {
      const usuario = await Usuario.create({ 
        nombre: nombre, apellido: apellido, pass: pass, email: email, pais: pais,
        ciudad: ciudad, edad: edad});
      console.log("Usuario creado con exito [SERVICE]");
      return usuario;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  loginUser = async (correo, pass) => {
    try {
      let encontrado = await Usuario.findOne({
        where: { email: correo, pass: pass }
      })
      if (encontrado != null) {
        console.log("Perfil encontrado con exito [SERVICE]");       
        return encontrado;        
      }else{
       return 'Usuario o contraseña incorrectos';
      }      
    } catch (error) {
      //console.log(error);
      return error;
    }
  }

  searchUser = async (nombre) => {
    try {
      let encontrado = await Usuario.findAll({
        attributes: ['id', 'nombre', 'apellido', 'pais', 'ciudad', 'imagen'],
        where: { 
          nombre:{
            [Op.like]: `%${nombre}%`
          }
         }
      });

      if (encontrado.length != 0) {
        console.log("Perfil encontrado con exito [SERVICE]");       
        return encontrado;        
      }else{
       return 'No hay resultados que mostrar';
      }      
    } catch (error) {
      //console.log(error);
      return error;
    }
  }

  listUsers = async () => {
    let usuarios = await Usuario.findAll();
    console.log("Consulta exitosa [SERVICE]");
    return usuarios;  
  }

  updateUser = async (id,nombre,apellido,pais,ciudad,edad,imagen,estudios,idiomas,linkedin,hobbies) => {
    try {
      const usuario = await Usuario.update({ 
        nombre: nombre, apellido: apellido, pais: pais, ciudad: ciudad, edad: edad,
        imagen: imagen, estudios: estudios, idiomas: idiomas, linkedin: linkedin, hobbies: hobbies
      },
      {
        where: { id: id }
      }      
      );
      console.log("Usuario actualizado con exito [SERVICE]");
      return usuario;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  deleteUser = async (id) => {
    let usuario = await Usuario.destroy({
      where: { id: id }
    });    
    console.log("Eliminacion exitosa [SERVICE]");
    return 0;  
  }



  

}

module.exports = User;