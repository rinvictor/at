'use strict'

var x=8;

//Importante: En este caso sería switch(true), no (x)
switch(true){
    case (x>0 && x<5):
        console.log("menor que 5 y mayor o igual a 0");
        break;
    case (x>=5 && x<7):
        console.log("menor que 7 y mayor o igual a 7");
        break;
    case (x>=7 && x<10):
        console.log("menor que 10 y mayor o igual a 7");
        break;
    default:
        console.log("otra cosa");
}

if (x>0 && x<5){
    console.log("menor que 5 y mayor o igual a 0");
} else if(x>=5 && x<7){
    console.log("menor que 7 y mayor o igual a 7");
} else if(x>=7 && x<10){
    console.log("menor que 10 y mayor o igual a 7");
} else{
    console.log("otra cosa");
}

