'use strict'

let cad1 = "hola";
let cad2 = "1";
let n1 = 1;
let b1 = true;

//Voy a hacer tal y como pide el enunciado distintos tipos de conversiones
// y a comprobar que el valor sea o no NaN

console.log(Number(cad1));; //Devuelve Nan, porque no se puede hacer la conversion
console.log(isNaN(Number(cad1))); //true
console.log(Number(cad2)); //1
console.log(isNaN(Number(cad2))); //false
console.log(String(n1));
console.log(isNaN(String(n1)));

//Una función tonta para probar esto y hacer conversiones solo de booleanos
function booleanToString(x){
    if (!(typeof(x) === "boolean")){
        console.log("Not a boolean");
    }else{
        console.log(String(x));
    }
};

console.log(typeof(b1)); //boolean
booleanToString(b1); //true
booleanToString(cad1); //Not a boolean 
