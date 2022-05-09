const express = require('express');
// Importamos el módulo express, que exporta una función

const app = express();
// Función principal, que a su vez tiene métodos

const puerto = process.env.PORT || 3000;
// Puerto indicado en la variable de entorno PORT, o 3000
// si la variable no está definida.

const path = require('path');
// Importamos el módulo path

dir_raiz = path.join( process.env.HOME, "www/site01");
// Construye ~/www/site01

app.get('/', (req, res) => {
    res.sendFile(path.join(dir_raiz,'holamundo.html'));
});
// Cuando el cliente solicita el raiz, sirve el holamundo

// Sirve todos los ficheros del directorio raiz
app.use(express.static(dir_raiz))

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Página no encontrada');
})
// Esta llamada debe ser la última, error 404

app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Error en el Servidor');
})
// Error 500, fallo en el servidor

app.listen(puerto, () => console.log(
  `Express iniciado en http://localhost:${puerto}\n` +
  `Sirviendo ficheros desde ${dir_raiz}\n`+
  `Ctrl-C para finalizar.`));