'use strict'
let parrafo01 = document.querySelector("#parrafo01");

function manej_boton01(event) {
    parrafo01.textContent = "one";
}

function manej_boton02(event) {
    parrafo01.textContent = "two";
}

function manej_boton03(event) {
    parrafo01.textContent = "three";
}


let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);
let boton02 = document.querySelector("#boton02");
boton02.addEventListener("click", manej_boton02);
let boton03 = document.querySelector("#boton03");
boton03.addEventListener("click", manej_boton03);