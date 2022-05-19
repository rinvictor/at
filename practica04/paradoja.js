'use strict'
function manej_boton01(event) {
    let p1 = document.querySelector("#p1");
    let p2 = document.querySelector("#p2");
    let p3 = document.querySelector("#p3");
    let p4 = document.querySelector("#p4");
    let p5 = document.querySelector("#p5");
    let c = generar_listas();

    p1.textContent = "Número de personas con el cumpleaños repetido:" + c[0]*2; //La funcion devuelve numero de cumpleaños repetidos, 1 cumpleaños, dos personas, 4 cumpleaños, 8 personas
    p2.textContent = "Lista de cumpleaños: " + c[1];
    p3.textContent ="Longitud de la lista (número de personas): " + c[1].length; 
    if (c[2][1]){ //Puede darse que haya 4 personas con el mismo cumpleaños, así saco todas las posibilidades
        p4.textContent = "Cumpleaños repetidos (día del año): " + c[2][0]+ " y " + c[2][1];
        p5.textContent = "Cumpleaños repetidos legibles: " + obtener_dia(c[2][0]) + " y " + obtener_dia(c[2][1]);
    }else{
        p4.textContent = "Cumpleaños repetido (día del año): " + c[2][0];
        p5.textContent = "Cumpleaños repetido legible: " + obtener_dia(c[2][0]);
    }
}
let boton01 = document.querySelector("#btn");
boton01.addEventListener("click", manej_boton01);