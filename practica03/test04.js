'use strict'

//Una función sencillla con notación tradicional
function concatenaCadena(x, y='añadida'){
    return x=x+y;
}

//Flecha
var f=(x,y='añadida')=> x=x+y;
/*
En este caso como hay mas de un parámetros tengo que
incluir los paréntesis
*/

console.log(concatenaCadena('hola')); //holaañadida
console.log(f('adios'));