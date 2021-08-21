const Publicacion = require('../models/publicacion.model');
const Usuario = require('../models/usuario.model');

class Post {
  //Metodos del Servicio Post
  createPost = async (idUsuario, contenido, fecha) => {
    try {
      const publicacion = await Publicacion.create({ 
        idUsuario: idUsuario, contenido: contenido, fecha: fecha,});
      console.log("Usuario creado con exito [SERVICE]");
      return publicacion;
    } catch (error) {s
      console.log(error);
      return error;
    }
  }

  searchPost = async (idUsuario) => {
    try {
      let encontrado = await Publicacion.findAll({        
        attributes: ['contenido', 'fecha'],
        where: { idUsuario: idUsuario },
        include: {
          model: Usuario,
          required: true,
          attributes: ['nombre', 'apellido', 'imagen'],
        }        
      });

      if (encontrado.length != 0) {
        console.log("Consulta exitosa [SERVICE]");       
        return encontrado;        
      }else{
       return 'No hay resultados que mostrar';
      }      
    } catch (error) {
      //console.log(error);
      return error;
    }
  }

  listPosts = async () => {
    let publicaciones = await Publicacion.findAll();
    console.log("Consulta exitosa [SERVICE]");
    return publicaciones;  
  }

  updatePost = async (id, contenido) => {
    try {      
      await Publicacion.update({ contenido: contenido },
      {
        where: { id: id }
      });  
      console.log("Publicacion actualizada con exito [SERVICE]");
      return "Publicacion actualizada con exito [SERVICE]";
    } catch (error) {
      console.log(error);
      return error;
    }  
  }

  deletePost = async (id) => {
    let post = await Publicacion.destroy({
      where: { id: id }
    });    
    console.log("Eliminacion exitosa [SERVICE]");
    return 0;  
  }
}


module.exports = Post;