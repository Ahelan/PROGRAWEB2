const express = require('express');
require("./db")
const router = require('./routes');

const app = express();
const port = 3000;

// Importar el módulo cors para habilitar CORS

app.use(express.json())

app.use(router);

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

