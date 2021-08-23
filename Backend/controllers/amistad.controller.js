const Friendship = require('../services/amistad.service');
const friendshipService = new Friendship();

const crearAmistad = async (req, res) => {
  const { idUsuarioA, idUsuarioB, fecha } = req.body;
  try {
    await friendshipService.createFriendship(idUsuarioA, idUsuarioB, fecha);
    console.log("Amistad exitosa [CONTROLLER]");
    res.status(201).json('Amistad realizada');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const listarAmistades = async (req, res) =>{
  try {
    let listaAmistades = await friendshipService.listFriendships();
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaAmistades);
  } catch (error) {
    return res.status(500);
  }
}

const buscarAmistad = async (req, res) =>{
  const idUsuario = req.body.idUsuario;
  try {
    let listaAmistades = await friendshipService.searchFriendship(idUsuario);
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaAmistades);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const actualizarAmistad = async (req, res) => {
  const { id, estatus } = req.body;
  try {
    await friendshipService.updateFriendship(id, estatus);
    console.log("Amistad actualizada con exito [CONTROLLER]");
    res.status(201).json('Amistad actualizada con Exito');
  } catch (error) {
    return res.status(500);
  }
}

const eliminarAmistad = async (req, res) =>{
  const id = req.body.id;
  try {
    await friendshipService.deleteFriendship(id);
    console.log("Eliminacion exitosa [CONTROLLER]");
    res.status(200).json('Amistad Eliminada');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = { crearAmistad, listarAmistades, buscarAmistad, actualizarAmistad, eliminarAmistad }