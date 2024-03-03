const express = require('express');
const app = express();
const port = 3000;

// Importar el módulo cors para habilitar CORS
const cors = require('cors');
app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hola")
})

app.post('/login', (req, res) => {
    // Obtener las credenciales del usuario desde el cuerpo de la solicitud
    const { username, password } = req.body;
    
    // Aquí deberías realizar la lógica de autenticación, como verificar las credenciales en una base de datos
    // Por simplicidad, aquí se asume que las credenciales son correctas
    if (username === 'karla' && password === '123') {
      // Si las credenciales son válidas, puedes responder con un mensaje de éxito o un token JWT
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      // Si las credenciales son incorrectas, responder con un mensaje de error
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

