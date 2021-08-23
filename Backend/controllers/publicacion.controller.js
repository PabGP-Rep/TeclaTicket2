const Post = require('../services/publicacion.service');
const postService = new Post();

const crearPublicacion = async (req, res) => {
  const { idUsuario, idUsuarioP, contenido, fecha } = req.body;
  try {
    await postService.createPost(idUsuario, idUsuarioP, contenido, fecha);
    console.log("Publicacion exitosa [CONTROLLER]");
    res.status(201).json('Publicación realizada');
  } catch (error) {
    return res.status(500).json({error: error.message});;
  }
}

const listarPublicaciones = async (req, res) =>{
  try {
    let listaPublicaciones = await postService.listPosts();
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaPublicaciones);
  } catch (error) {
    return res.status(500);
  }
}

const buscarPublicaciones = async (req, res) =>{
  const idUsuario = req.body.idUsuario;
  try {
    let listaPublicaciones = await postService.searchPost(idUsuario);
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaPublicaciones);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const actualizarPublicacion = async (req, res) => {
  const { id, contenido } = req.body;
  try {
    await postService.updatePost(id, contenido);
    console.log("Publicacion actualizada con exito [CONTROLLER]");
    res.status(201).json('Publicacion actualizada con Exito');
  } catch (error) {
    return res.status(500);
  }
}

const eliminarPublicacion = async (req, res) =>{
  const id = req.body.id;
  try {
    await postService.deletePost(id);
    console.log("Eliminacion exitosa [CONTROLLER]");
    res.status(200).json('Publicacion Eliminada');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}


module.exports = { crearPublicacion, listarPublicaciones, buscarPublicaciones, actualizarPublicacion, eliminarPublicacion };