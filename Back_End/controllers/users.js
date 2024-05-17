const User = require('../models/users')
const multer = require('multer');

const login = async (req, res) => {
    // Obtener las credenciales del usuario desde el cuerpo de la solicitud
    const { username, password } = req.body;
    
    // Aquí deberías realizar la lógica de autenticación, como verificar las credenciales en una base de datos
    // Por simplicidad, aquí se asume que las credenciales son correctas
    console.log(req.body)
    if (username === 'karla' && password === '123') {
      // Si las credenciales son válidas, puedes responder con un mensaje de éxito o un token JWT
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      // Si las credenciales son incorrectas, responder con un mensaje de error
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
}

const createUser = function(req, res){
  const { username, email, password, profilePicture } = req.body;
  const user = new User({ email, password, username, profilePicture })
  user.save().then(function() {
    return res.send(user);
  }).catch(function(error) {
    return res.status(400).send(error);
  });
};


module.exports = {
    login: login,
    createUser: createUser
}