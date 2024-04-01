// Importar las dependencias necesarias
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir una ruta para el home
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Node.js!');
});

// Definir el puerto en el que la aplicación va a escuchar
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
