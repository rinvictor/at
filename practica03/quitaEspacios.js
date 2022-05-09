'use strict'

function quitaespacios(cad){
    return cad.replace(/ /g, "_");
}

let cad = "Esto es una cadena que contiene espacios";
cad =quitaespacios(cad);
console.log(cad); //Esto_es_una_cadena_que_contiene_espacios