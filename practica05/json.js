'use strict'
let miObj = {"nombre":"Alicia", "age":20, "status":true, "profesion":"enfermera", "educacion":["URJC", "UAM"]};
console.log(miObj, typeof(miObj))

let cadena=JSON.stringify(miObj);
console.log(cadena, typeof(cadena))

let miObj2=JSON.parse(cadena);
console.log(miObj2, typeof(miObj2));
