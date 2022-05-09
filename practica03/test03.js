'use strict'

/*
Se va a ilustrar que el paso de valores a funciones es por
valor y no por referencia
*/

//Una función tonta que concatena una cadena con otra
function concatenaCadena(x, y='añadida'){
    x=x+y;
    console.log(x); //En este punto si se modifica x
    return x;
}


var x='cadena';
var y='concatenada';
console.log(x); //cadena
console.log(y); //cadenaconcatenada
concatenaCadena(x,y);
console.log(x);//cadena

//Como vemos no se modifica el parámtro original

/*
Se va a ilustrar los valores por omisión
*/
//En concatenaCadena añado valor por defecto

console.log(concatenaCadena(x));
