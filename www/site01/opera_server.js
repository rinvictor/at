const express = require('express');
// Importamos el módulo express, que exporta una función

const app = express();
// Función principal, que a su vez tiene métodos

const puerto = process.env.PORT || 3000;
// Puerto indicado en la variable de entorno PORT, o 3000
// si la variable no está definida.

app.use(express.json()); 
// middleware necesario para procesar las peticiones
// POST que incluyan un cuerpo json


// Direccionamiento estático:
const path = require('path');
// Importamos el módulo path

dir_raiz = path.join( process.env.HOME, "at/www/site01");
// Construye ~/www/site01

app.use(express.static(dir_raiz))
// Sirve todos los ficheros del directorio raiz


//Función añadida
function multiplica(num, multiplicador){
  return num*multiplicador;
}

function manej_dobla(req, res){
  let num = req.params.num;
  if (!isNaN(Number(num))){
    doblado = multiplica(num, 2); //Para multiplicar por 2
    console.log("El cliente envía " + num);
    console.log("La respuesta es " + doblado);
    doblado_json = JSON.stringify(doblado);
    res.json(doblado_json);
  }else{
    res.json('400 Bad Request');
  }
}

function manej_triplica(req, res){
  let num = req.params.num;
  if (!isNaN(Number(num))){
    triplicado = multiplica(num, 3); //Para multiplicar por 2
    console.log("El cliente envía " + num);
    console.log("La respuesta es " + triplicado);
    triplicado_json = JSON.stringify(triplicado);
    res.json(triplicado_json);
  }else{
    res.json('400 Bad Request')
  }
}

function manej_error404(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
}

function manej_error500(err, req, res, next){
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
}

// Direccionamiento para GET

app.get('/api/dobla/:num', manej_dobla);

app.get('/api/triplica/:num', manej_triplica);

// Error 404 
app.use(manej_error404)

// Error 500
app.use(manej_error500)

app.listen(puerto, () => console.log(
  `Express iniciado en http://localhost:${puerto}\n` +
  `Ctrl-C para finalizar.`));
