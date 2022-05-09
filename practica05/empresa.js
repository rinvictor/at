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

// Direccionamiento para GET
app.get('/', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send('Una api de prueba para una empresa de coches');
})

app.get('/about', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send('¡Hola! Somos una empresa de coches que blabla y hacemos cosas');
})

app.get('/info/:id', (req, res) => {
  let id = req.params.id
  console.log(id)
  if(id==='0'){
    console.log("2")
    res.json("['Nombre':'Pepe',Apellidos':'Perez Perez', 'DNI':'67898658J']");
  }else if(id==='1'){
    res.json("['Nombre':'Juan',Apellidos':'Palomo', 'DNI':'87392837H']");
  }else{
    res.json('error')
  }

})

// Direccionamiento para PUT
app.put('/api/alta',(req,res) => {
  console.log('Dando a un usuario de alta con estos datos:');
  console.log(req.body);
  res.json(req.body);
});

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