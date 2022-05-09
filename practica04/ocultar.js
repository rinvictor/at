'use strict'
function quita_clase() {
    let marco = document.querySelector('#web');
    marco.classList.remove("oculto");
};

function pon_clase() {
    let marco = document.querySelector('#web');
    marco.classList.add("oculto");
};

let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", quita_clase);
let boton02 = document.querySelector("#boton02");
boton02.addEventListener("click", pon_clase);