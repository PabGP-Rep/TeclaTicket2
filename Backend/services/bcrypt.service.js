

const encriptar = async (pass) => {
  return 
}

const comparar = async (pass, hash) =>{
  return bcrypt.compare(pass, hash);
}

 module.exports = { encriptar, comparar };