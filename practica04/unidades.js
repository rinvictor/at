'use strict'
function metros2Centimetros(x){
    return x*100;
}

function metros2Pulgadas(x){
    return x/0.0254;
}

function metros2Pulgadas(x){
    return x/0.9144;
}

function convierte(dist, med){
    if (arguments.length != 2){
        return "Error: Incorrect number of params";
    }
    if (typeof(x)==="string"){
        Number(x);
    }

    let str_dist="";
    if (med === "m"){
        str_dist = String(dist);
    }else if (med === "cm"){
        str_dist = String(metros2Centimetros(dist));
    }else if (med === "in"){
        str_dist = String(metros2Pulgadas(dist));
    }else if (med === "yd"){
        str_dist = String(metros2Pulgadas(dist));
    }else{
        return "Error: Incorrect param type";
    }

    return str_dist+" "+med;
}

let parrafo01 = document.querySelector("#parrafo01");

function manej_boton01(event) {
    parrafo01.textContent = convierte(5, "m");
}

function manej_boton02(event) {
    parrafo01.textContent = convierte(5, "cm");
}

function manej_boton03(event) {
    parrafo01.textContent = convierte(5, "in");
}

function manej_boton04(event) {
    parrafo01.textContent = convierte(5, "yd");
}


let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);
let boton02 = document.querySelector("#boton02");
boton02.addEventListener("click", manej_boton02);
let boton03 = document.querySelector("#boton03");
boton03.addEventListener("click", manej_boton03);
let boton04 = document.querySelector("#boton04");
boton04.addEventListener("click", manej_boton04);