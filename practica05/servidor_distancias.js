const express = require('express');
// Importamos el módulo express, que exporta una función

const app = express();
// Función principal, que a su vez tiene métodos

const puerto = process.env.PORT || 3000;
// Puerto indicado en la variable de entorno PORT, o 3000
// si la variable no está definida.

//
'use strict'

function metros2Centimetros(x){
    return x*100;
}

function metros2Pulgadas(x){
    return x/0.0254;
}

function metros2Pulgadas(x){
    return x/0.9144;
}


function convierte(dist, med){
    if (arguments.length != 2){
        return "Error: Incorrect number of params";
    }
    if (typeof(x)==="string"){
        Number(x);
    }

    let str_dist="";
    if (med === "m"){
        str_dist = String(dist);
    }else if (med === "cm"){
        str_dist = String(metros2Centimetros(dist));
    }else if (med === "in"){
        str_dist = String(metros2Pulgadas(dist));
    }else if (med === "yd"){
        str_dist = String(metros2Pulgadas(dist));
    }else{
        return "400 Bad Request";
    }

    return str_dist+" "+med;
}

app.use(express.json()); 
// middleware necesario para procesar las peticiones
// POST que incluyan un cuerpo json

// Direccionamiento para GET
app.get('/', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send('Servidor de distancias');
})

app.get('/api/convierte/:dist/:med', (req, res) => {
  let dist = req.params.dist
  let med = req.params.med
  res.type('text/plain; charset=utf-8');
  res.send(convierte(dist,med));
})

// Esta llamada debe ser la última, error 404
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
})

app.listen(puerto, () => console.log(
  `Express iniciado en http://localhost:${puerto}\n` +
  `Ctrl-C para finalizar.`));