
'use strict'
function manej01(event) {
  let usuario = document.querySelector("#usuario");
  console.log(usuario.value);
  localStorage.setItem('nombreUsuario', usuario.value)
};

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  let x = pos.coords;
  latitude = localStorage.setItem('latitude', x.latitude)
  longitude = localStorage.setItem('longitude', x.longitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};


let nombreUsuario = localStorage.getItem('nombreUsuario');
let fecha_storage = localStorage.getItem('fecha')
let latitude = localStorage.getItem('latitude')
let longitude = localStorage.getItem('longitude')

if (!nombreUsuario) {
  let formulario01 = document.querySelector("#formulario01");
  formulario01.addEventListener("change", manej01);
}
else{
  let div01 = document.querySelector("#div01");
  if (!latitude && !longitude){ //En caso de que el usuario deniegue compartir su ubicación
    div01.textContent = "Hola " + nombreUsuario + ", tu última sesión: " + fecha_storage + " no tengo constancia de tu última ubicación";
  }else{
    div01.textContent = "Hola " + nombreUsuario + ", tu última sesión: " + fecha_storage + " en " + latitude + " " + longitude;
  }
  
}
//Lo hago para ambos casos
let ahora = Date.now();
let fecha = new Date(ahora);
localStorage.setItem('fecha', fecha.toISOString());
navigator.geolocation.getCurrentPosition(success, error, options);


/*
'use strict'
localStorage.removeItem('nombreUsuario');
localStorage.removeItem('fecha_storage');
localStorage.removeItem('latitude');
localStorage.removeItem('longitude');
*/



