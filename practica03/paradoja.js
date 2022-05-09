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
    console.log(lista_fechas)
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
    //Devuelvo la longitud de la lista
    return(repetidos.length)
}

function generar_listas(){
    let i=0;
    let c=0;
    do{
        let lista_fechas = obtener_lista_fechas(i);
        c = obtener_cumpleanos(lista_fechas);
        console.log(c)
        i++;
    }
    while(c === 0);
}

function obtener_dia(d){
    var now = d;
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
}

generar_listas();
obtener_dia(233);