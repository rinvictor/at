'use strict'

function busca_cadena(x, cad){
    if (arguments.length != 2){
        throw 'Error: Incorret number of arguments';
    }
    if (x.length != 1){
        throw 'Error: First argument must have a length of 1';
    }

    let count=0;
    for (let c of cad){
        if (c===x){
            count++;
        }
    }

    return count;
}

try {
    //Ambos elevan las excepciones correctas
    //console.log(busca_cadena("xx", "xyx"))
    //console.log(busca_cadena("x"))
    console.log(busca_cadena("x", "xyz")); //1
    console.log(busca_cadena("1", "xyz")); //0
    console.log(busca_cadena("a", "ababA")); //2
}catch (e){
    console.log("Exception" + e);
}
