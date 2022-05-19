'use strict'

function cuenta_caracteres(contrasena, regex){
    var n = contrasena.length - contrasena.replace(regex, '').length;
    return n;
}

function cuenta_caracteres_especiales(contrasena, cadespeciales){
    var c=0;
    for (var i = 0; i < cadespeciales.length; i++) {
        for (var j = 0; j < contrasena.length; j++) {
            if(contrasena[j]==cadespeciales[i]){
                c++;
            }
        }

    }
    return c;
}

function valida_contrasena(contrasena, len, minminus, minmayus, minnumeros, mincaracespeciales, cadespeciales){
    console.log(contrasena);
    try{
        if (arguments.length != 7){
            throw 'Error: Número incorrecto de argumentos';
        }
        if (typeof(contrasena) != "string" || typeof(len) != "number" || typeof(minmayus) != "number" || typeof(minnumeros) != "number"
        || typeof(minminus) != "number" || typeof(mincaracespeciales)!= "number" || typeof(cadespeciales) != "string"){
            throw 'Error: Tipo de parámetro incorrecto';
        }

        if (contrasena.length < len){
            return "Error: la contraseña debe tener "+len+" caracteres";
        }
        //Cuento las mayúsculas
        if (cuenta_caracteres(contrasena, /[A-ZÑ]/g) < minmayus){
            return "Error: la contraseña debe tener "+minmayus+" mayúsculas";
        }
        //Cuento las minúsculas
        if (cuenta_caracteres(contrasena, /[a-zñ]/g) < minminus){
            return "Error: la contraseña debe tener "+minminus+" minúsculas";
        }
        //Cuento los números
        if (cuenta_caracteres(contrasena, /[0-9]/g) < minnumeros){
            return "Error: la contraseña debe tener "+minnumeros+" números";
        }
        //Cuento los caracteres especiales
        //En este caso no lo paso como expresión regular ya que en el enunciado indica que puede ir variando
        if (cuenta_caracteres_especiales(contrasena, cadespeciales) < mincaracespeciales){
            return "Error: la contraseña debe tener "+mincaracespeciales+" caracteres especiales";
        }

    }catch(e){
        return "Excepción capturada "+e;
    }

    return "ok";
}

//Lo comento para la practica04
/*
console.log(valida_contrasena("HOla12._0¿", 10, 2, 2, 2, 2, "_,.-{}[]!\"·$%&/()=?¿¡'")); //ok
console.log(valida_contrasena("HOla12._0¿", 10, 2, 2, 2, 5, "_,.-{}[]!\"·$%&/()=?¿¡'")); //Error: la contraseña debe tener 5 caracteres especiales
console.log(valida_contrasena("HOla12._0¿", "g", 2, 2, 2, 5, "_,.-{}[]!\"·$%&/()=?¿¡'"));*/

//console.log(contrasena, len, minminus, minmayus, minnumeros, mincaracespeciales, cadespeciales)
//console.log(contrasena, len, minminus, minmayus, minnumeros, mincaracespeciales, cadespeciales)


