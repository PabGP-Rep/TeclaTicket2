const User = require('../services/usuario.service');
const {generarToken} = require('../Services/jwt.service');
const userService = new User();

const crearUsuario = async (req, res) => {
  const { nombre, apellido, pass, email, pais, ciudad, edad } = req.body;
  try {
    await userService.createUser(nombre, apellido, pass, email, pais, ciudad, edad);
    console.log("Usuario creado con exito [CONTROLLER]");
    res.status(201).json('Usuario registrado con Exito');
  } catch (error) {
    return res.status(500);
  }
}

const loginUsuario = async (req, res) =>{
  const { email, pass } = req.body;
  try {
    const usuario = JSON.parse(JSON.stringify(await userService.loginUser(email, pass)));
    if (usuario == 'Usuario o contraseña incorrectos') {
      throw new Error('Usuario o contraseña incorrectos');      
    }

    const user = { "email": usuario.email, "id": usuario.id, "tipo": usuario.tipo };
    delete usuario.pass;
    delete usuario.tipo;
    const token = await generarToken(user);
    const respuesta = [{usuario}, {token}]
    console.log("Perfil encontrado con exito [CONTROLLER]");
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

const listarUsuarios = async (req, res) =>{   

  //await userService.sincron();
  
  try {
    let listaUsuarios = await userService.listUsers();
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaUsuarios);
  } catch (error) {
    return res.status(500);
  }
}

const buscarUsuarios = async (req, res) =>{
  const nombre = req.body.nombre;
  try {
    let listaUsuarios = await userService.searchUser(nombre);
    console.log("Consulta exitosa [CONTROLLER]");
    res.status(200).json(listaUsuarios);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

const actualizarUsuario = async (req, res) => {
  const { id,nombre,apellido,pais,ciudad,edad,imagen,estudios,idiomas,linkedin,hobbies } = req.body;
  try {
    await userService.updateUser(id,nombre,apellido,pais,ciudad,edad,imagen,estudios,idiomas,linkedin,hobbies);
    console.log("Usuario actualizado con exito [CONTROLLER]");
    res.status(201).json('Usuario actualizado con Exito');
  } catch (error) {
    return res.status(500);
  }
}

const eliminarUsuario = async (req, res) =>{
  const id = req.body.id;
  try {
    await userService.deleteUser(id);
    console.log("Eliminacion exitosa [CONTROLLER]");
    res.status(200).json('Usuario Eliminado');
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = { crearUsuario, loginUsuario, listarUsuarios, buscarUsuarios, actualizarUsuario, eliminarUsuario };