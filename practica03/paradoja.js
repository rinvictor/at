'use strict'

//Número entre 1 y 365 aleatorio
function obtener_fecha_aleatoria(){
    var inicio = 1;
    var fin = 365;
    var fecha = Math.random()*(fin-inicio + 1);
    fecha = Math.floor(fecha);
    return inicio + fecha;
}

function obtener_lista_fechas(n){
    var lista_fechas=[];
    for (let i=0;i<n;i++){
        lista_fechas.push(obtener_fecha_aleatoria())
    }
    return lista_fechas;
}

function obtener_cumpleanos(lista_fechas){
    //console.log(lista_fechas);
    var repetidos=[]
    for (let i=0;i<lista_fechas.length;i++){
        for (let j=0;j<lista_fechas.length;j++){
            if (i != j){ //Para no comparar consigo mismo
                if (lista_fechas[i] === lista_fechas[j] && !repetidos.includes(lista_fechas[i])){ //Para no incluirlo dos veces 
                        repetidos.push(lista_fechas[i]);
                }
            }
        }
    }
    return([repetidos.length, lista_fechas, repetidos])
}

function generar_listas(){
    let i=0;
    let c=0;
    do{
        let lista_fechas = obtener_lista_fechas(i);
        c = obtener_cumpleanos(lista_fechas);
        i++;
    }
    while(c[0] === 0);
    return c;
}

function obtener_dia(day){
    let year=2022; // asumo este calculo
    var date = new Date(year, 0); // inicializar 2022-1-1
    var cumpleanos =  new Date(date.setDate(day)); // calculo
    let dia = cumpleanos.getDate(); //el dia 1 es el 31 de diciembre a las 12, soluciionado arriba para que sea el 1
    let mes = cumpleanos.getMonth()+1; //para que no empiece en 0 y sea más legible
    return dia + "/" + mes;
}

let c=generar_listas();

//Comento de cara a la practica 4
/*
console.log("Numero de personas con el cumpleaños repetido:", c[0]*2); //La funcion devuelve numero de cumpleaños repetidos, 1 cumpleaños, dos personas, 4 cumpleaños, 8 personas
console.log("Lista de cumpleaños: ", c[1]);
console.log("Longitud de la lista (número de personas): ", c[1].length);
//Puede devolver más de un cumpleaños si da esa casualidad en la lista, resuelto en la p4 
console.log("Cumpleaños repetido (día del año): ", c[2][0]);
console.log("Cumpleaños repetido legible: ", obtener_dia(c[2][0]))
*/

//console.log(obtener_dia(2));