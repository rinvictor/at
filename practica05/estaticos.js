const express = require('express');
// Importamos el módulo express, que exporta una función

const app = express();
// Función principal, que a su vez tiene métodos

const puerto = process.env.PORT || 3000;
// Puerto indicado en la variable de entorno PORT, o 3000
// si la variable no está definida.

const path = require('path');
// Importamos el módulo path

p01 = path.join( process.env.HOME, "at/practica01");
p02 = path.join( process.env.HOME, "at/practica02");
p03 = path.join( process.env.HOME, "at/practica03");
p04 = path.join( process.env.HOME, "at/practica04");
// Construye ~/www/site01

app.use(express.static(p01));
app.use(express.static(p02));
app.use(express.static(p03));
app.use(express.static(p04));
// Sirve todos los ficheros del directorio raiz

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
  `Sirviendo ficheros desde ${p01}, ${p02}, ${p03} y ${p04}\n`+
  `Ctrl-C para finalizar.`));