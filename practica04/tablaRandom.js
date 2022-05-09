'use strict'

let lista_cartas=[]

function generaNumCarta(){
    var inicio = 1;
    var fin = 10;
    var num = Math.random()*(fin-inicio + 1);
    num = Math.floor(num);
    return inicio + num;
}

function generaPaloCarta(){
    var inicio = 1;
    var fin = 4;
    var palo = Math.random()*(fin-inicio + 1);
    palo = Math.floor(palo);
    return inicio + palo;
}

function generaCarta(){
    while(true){
        var num=generaNumCarta();
        var palo=generaPaloCarta();
        
        if(palo===1){
            palo="oros";
        }else if (palo===2){
            palo="bastos";
        }else if (palo===3){
            palo="copas"
        }else{
            palo="espadas"
        }
        let buscacarta = lista_cartas.find(carta => carta.num === num && carta.palo===palo);
        lista_cartas.push({num,palo});
        if (buscacarta === undefined){ //si no está repetida
            return[num,palo]
        }
        
    }
}

function manej_boton01(event) {
    let tabla_cartas = document.querySelector("#tabla_cartas");
    let tr = document.createElement("tr");  //creamos la fila
    let td = document.createElement("td"); //creamos la celda
    let carta= generaCarta(); 
    td.append(carta); //meto carta en celda
    tr.append(td); //meto celda en fila
    tabla_cartas.append(tr); //meto fila en tabla
}

let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);
