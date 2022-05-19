'use strict'
let lista_cartas=[];
let repeticion=false;
let modo_imagenes=true;

/*
function sleep(milisegundos) {
    const fecha = Date.now();
    let ahora = null;
    do {
      ahora = Date.now();
    } while (ahora - fecha < milisegundos);
  }*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
        //console.log(num, palo)
        
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
        
        if (buscacarta === undefined){ //si no está repetida
            lista_cartas.push({num,palo});
            return[num,palo]
        }else{ //si está repetida
            if (repeticion){
                if (lista_cartas.length===40){
                    /*
                    //Esto sería si quiero borrar lo que se ha escrito hasta el momento
                    let tabla_cartas = document.querySelector("#tabla_cartas");
                    tabla_cartas.textContent="Todas las cartas han salido! Debes reiniciar el mazo"
                    break;
                    */
                   return [];
                }
                continue;
            }else{
                return[num,palo];
            }
        }
        
    }
}

async function efecto_barajado(numero, palo){
    let img2 = document.querySelector("#actual");
            
    img2.src="../images/cartas/"+"5"+"_"+"bastos"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"2"+"_"+"oros"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"4"+"_"+"copas"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"10"+"_"+"bastos"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"1"+"_"+"copas"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"4"+"_"+"oros"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"8"+"_"+"espadas"+".jpg";
    await sleep(200)
    img2.src="../images/cartas/"+"8"+"_"+"bastos"+".jpg";
    

    img2.src="../images/cartas/"+numero+"_"+palo+".jpg";
    img2.alt="Carta: " + numero+"_"+palo;
    img2.width="300";
}

function manej_boton01(event) {
    let tabla_cartas = document.querySelector("#cartas");
    //let carta_actual = document.querySelector("#actual");
    let carta= generaCarta();
    //console.log(carta[0]+"_"+carta[1]);
    if (!modo_imagenes){
        if (carta.length != 0){
            tabla_cartas.append("["+carta+"] ");

            let img2 = document.querySelector("#actual");
            img2.src = "";
            img2.alt="["+carta+"]";
        } else{
            let aviso = document.querySelector("#aviso")
            aviso.textContent = "Todas las cartas ya han salido, debes reiniciar el mazo!";
        }
   
    }else{
        if (carta.length != 0){
            let img = document.createElement("img");
            img.src="../images/cartas/"+carta[0]+"_"+carta[1]+".jpg";
            img.alt="Carta: " + carta[0]+"_"+carta[1];
            img.width="100";
            tabla_cartas.append(img);
            
            //Recibe el numero y el palo, crea el efecto y deja la última carta, usa promesas para este propósito.
            efecto_barajado(carta[0], carta[1]);

        }else{
            let aviso = document.querySelector("#aviso")
            aviso.textContent = "Todas las cartas ya han salido, debes reiniciar el mazo!";
        }
    }

    //console.log(lista_cartas)
}

function manej_boton02(event) {
    let boton02 = document.querySelector("#boton02");
    if (repeticion){
        boton02.textContent = "Modo sin repetición"
    }else{
        boton02.textContent = "Modo con repetición"
    }
    repeticion=!repeticion;
}

function manej_boton03(event) {
    lista_cartas=[];
    let tabla_cartas = document.querySelector("#cartas");
    tabla_cartas.textContent = "";
    let aviso = document.querySelector("#aviso");
    aviso.textContent="";
    let img2 = document.querySelector("#actual");
    img2.src="";
    img2.alt="";
    img2.textContent="";
}

function manej_boton04(event) {
    let boton02 = document.querySelector("#boton04");
    if (modo_imagenes){
        boton02.textContent = "Modo imagenes"
    }else{
        boton02.textContent = "Modo texto"
    }
    modo_imagenes=!modo_imagenes;
}


let boton01 = document.querySelector("#boton01");
boton01.addEventListener("click", manej_boton01);

let boton02 = document.querySelector("#boton02");
boton02.addEventListener("click", manej_boton02);

let boton03 = document.querySelector("#boton03");
boton03.addEventListener("click", manej_boton03);

let boton04 = document.querySelector("#boton04");
boton04.addEventListener("click", manej_boton04);