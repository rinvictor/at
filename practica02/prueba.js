'use strict'
function manej_boton01(event) {
  let parrafo01 = document.querySelector("#parrafo01");
  let fecha = new Date();
  parrafo01.textContent = fecha;
}
let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);