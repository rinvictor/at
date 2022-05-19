"use strict"

let errors=false;

async function trae_resultado (numero, recurso) {
  let dir_base = "http://localhost:3000/"

  //let recurso = "api/dobla/";
  let url = dir_base + recurso + numero;
  console.log(url);

  let respuesta =  await fetch(url);
  let respuesta_json =  await respuesta.json();
  console.log(respuesta_json);
  return respuesta_json;
}

async function manej_boton01(event) {
  //Número entero aleatorio entre 0 y 99
  let numero = Math.floor(100 * Math.random());

  span01.textContent = numero;
  span02.textContent = await trae_resultado(numero);
}

async function manej_boton01(event) {
  var numero=0;
  if (errors){
    let random = Math.floor(3 * Math.random());
    if (random === 2){
      numero = "error"
    }else{
      numero = Math.floor(100 * Math.random());
    }
  }else{
    numero = Math.floor(100 * Math.random());
  }

  span01.textContent = numero;
 
  let resultado = await trae_resultado(numero, "api/dobla/");
  console.log("Resultado:", resultado);

  span02.textContent = resultado;
}

async function manej_boton02(event) {
  //Número entero aleatorio entre 0 y 99
  let numero = Math.floor(100 * Math.random());

  span01.textContent = numero;
  span02.textContent = await trae_resultado(numero);
}

async function manej_boton02(event) {
  var numero=0;
  if (errors){
    let random = Math.floor(3 * Math.random());
    if (random === 2){
      numero = "error"
    }else{
      numero = Math.floor(100 * Math.random());
    }
  }else{
    numero = Math.floor(100 * Math.random());
  }
  span01.textContent = numero;
 
  let resultado = await trae_resultado(numero, "api/triplica/");
  console.log("Resultado:", resultado);

  span02.textContent = resultado;
}


function manej_boton03(event) {
  let boton03 = document.querySelector("#boton03");
  if (errors === false){
    boton03.textContent = "No introducir errores"
  }else{
    boton03.textContent = "Introducir errores"
  }
  errors=!errors;
  console.log(errors);
  

  
}

let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);


let boton02 = document.querySelector("#boton02");
boton02.addEventListener("click", manej_boton02);

let boton03 = document.querySelector("#boton03");
boton03.addEventListener("click", manej_boton03);