'use strict'
function cambia_clase() {
    let marco = document.querySelector('#marco_foto')
    let boton = document.querySelector('#boton01')

    if (oculto){
        marco.classList.remove("oculto");
        oculto=false
        boton.textContent="Ocultar foto"
    }else{
        marco.classList.add("oculto");
        oculto=true
        boton.textContent="Mostrar foto"
    }
};

let oculto=true
let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", cambia_clase);
