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

console.log(convierte(5)) //Error: Incorrect number of params
console.log(convierte(5, "")) //Error: Incorrect number of params
console.log(convierte("5", "m")) //5 m
console.log(convierte("5", "cm")) //500 cm
console.log(convierte("5", "in")) //5.468066491688539 in
console.log(convierte("5", "yd")) //5.468066491688539 yd
console.log(typeof(convierte(5, "cm"))) //string