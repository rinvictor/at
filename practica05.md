# Notas relevantes sobre la práctica 05

## Práctica 5.5. Ficheros estáticos.
Con este script lo que se hace es servir los ficheros de mi disco duro vía web.
De tal manera que para el caso de la práctica01, por ejemplo, el usuario podría hacer: http://localhost:3000/alta.html

## Práctica 5.7. Prueba de cliente REST.
Para probar dobla_client y dobla_server:

```
~/www/site01$ pwd
/home/vrincon/www/site01
~/www/site01$ ls
dobla_client.html  dobla_server.js  js
~/www/site01$ ls js/
dobla_client.js
```

1. Lanzo el servidor de express con node dobla_server.js
2. Compruebo que el servidor atiende a las peticiones REST en http://localhost:3000/api/dobla/10
3. Puedo probar si Express sirve el código de JavaScript haciendo: http://localhost:3000/js/dobla_client.js
4. Compruebo que todo funciona como debe en: http://localhost:3000/dobla_client.html

## Práctica 5.8.
En el caso de estar haciendo pruebas en: ~/at/practica05 y exportando: dir_raiz = path.join( process.env.HOME, "at/practica05");
1. Lanzo el servidor con node opera_server.js
2. Compruebo que todo funciona como debe en: http://localhost:3000/opera_client.html

Pero en la práctica me dice que lo que tengo que exportar es el código de at/www/site01, es decir, dir_raiz = path.join( process.env.HOME, "at/www/site01");
Para probarlo sería:
1. Lanzo el servidor con node opera_server.js en ~/at/practica05
2. Compruebo que todo funciona en: http://localhost:3000/opera_client.html
Está exportando el contenido del directorio at/www/site01 

En mi caso como tengo también el código del servidor en at/www/site01, podría lanzarlo desde ahí y los pasos a seguir serían exactamente los mismos.

## Notas adicionales:
### Funciones flecha vs funciones con notación tradicional:

>Ejemplo de clase:

```
app.get('/api/...', (req, res)) => {
    codigo de la función
})
```
En notación tradicional sería:
```
function manej_dobla(req,res){
    código de la función
}
```
```
app.get('/api/...', manej_dobla);
```


