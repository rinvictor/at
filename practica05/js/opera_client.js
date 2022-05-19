"use strict"

async function trae_resultado (numero) {
  let dir_base = "http://localhost:3000/"

  let recurso = "api/dobla/";
  let url = dir_base + recurso + numero;

  let respuesta =  await fetch(url);
  let respuesta_json =  await respuesta.json();
  return respuesta_json;
}

async function manej_boton01(event) {
  //Número entero aleatorio entre 0 y 99
  let numero = Math.floor(100 * Math.random());

  span01.textContent = numero;
  span02.textContent = await trae_resultado(numero);
}

async function manej_boton01(event) {
  //Número entero aleatorio entre 0 y 99
  let numero = Math.floor(100 * Math.random());
   

  span01.textContent = numero;
 
  let resultado = await trae_resultado(numero);
  console.log("Resultado:");
  console.log(resultado);

  span02.textContent = resultado;
}

let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);