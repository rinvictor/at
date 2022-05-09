'use strict'

function crea_usuario(nombre, apellido, username, passwd){
    let usuario ={
        nombre:nombre,
        apellido:apellido,
        username:username,
        passwd:passwd
    };
    return usuario;
}

//Devuelvo un array con los que cumplan la condicion
function busca_por_nombre(array_usuarios, nombre){
    let r=[];
    for (let a of array_usuarios){
        if (a.nombre === nombre){
            r.push(a);
        }
    }

    return r;
}

let usuario = crea_usuario("Juan", "Perez", "JuanPerez89", "unacontraseña");
let usuario2 = crea_usuario("Pedro", "Sanchez", "PedroPresi", "unapasswd");
let usuario3 = crea_usuario("Pepe", "Sancho", "Pepepepe2", "holacontraseña");
let usuario4 = crea_usuario("Pedro", "otro", "nopolitico", "1234")

let array_usuarios=[usuario, usuario2, usuario3, usuario4];


console.log(busca_por_nombre(array_usuarios, "Juan")); //Devuelve uno
console.log(busca_por_nombre(array_usuarios, "Noexiste")); //Lista vacía
console.log(busca_por_nombre(array_usuarios, "Pedro")); //Devuelve un array con ambos
