/* Este archivo tiene la finalidad de dar un ejemplo de como trabajar las cookies en Javascript  */
// Esta funcion nos ayuda a crear una cookie que recibe el nombre y el valor de la misma
function fnCrearCookies(vNombre, vValor) {
    // Escapamos y salvamos los chars Especiales
    vValor = escape(vValor);
    // Creamos una instancia de la fecha actual
    var hoy = new Date();
    // Le seteamos el mes a hoy apartir del mes actual y le sumamos un mes apartir de
    // la fecha actual
    hoy.setMonth(hoy.getMonth()+1);
    // Creamos la cookie con la fecha de expiracion con la fecha de hoy.
    document.cookie = `${vNombre}=${vValor};expires=${hoy.toUTCString()};`;
}
// Funcion que borra la cookie a aprtir del nombre de la misma asignanole una fecha caduca
function fnBorrarCookie(vNombre) {
    var hoy= new Date();
    hoy.setMonth(hoy.getMonth()-1);
    document.cookie = `${vNombre}=x;expires=${hoy.toUTCString()};`;
}
// Funcion que obtiene la cookie deseada apartir de su nombre para regrear al final su valor
function fnGetCookies(vNombre) {
    // Obtenemos las cookies existentes
    var cookies=document.cookie;
    // Creamos un arreglo con cada cookie
    var cookieArr=cookies.split("; ");
    // mostramos las cookies
    console.log(cookieArr);
    // Proceso para separa nombre y valor de las cookies y almacenadas en una matriz
    for(let i=0; i<cookieArr.length; i++){
        // se separa nombre y valor de cada cookie
        var parArr = cookieArr[i].split("=");
        //Asignacion una vez ya separado
        cookieArr[i] = parArr;
    // Validamos que el nombre que ingresamos en la funcion coincida con alguna cookie existente
        if(parArr[0]===vNombre){
            // Retornamos el valor de la cookie solicitada con su formato original
            return unescape(parArr[1]);
        }
    }
    return undefined;
}
/* //Demostracion de scape y unescape
var demo="123;*123'123/ 123";
console.log(demo);
//valor  escapado pasado con caracteres en su version HTML
console.log(escape(demo));
// valor escapado en su valor original
console.log(unescape(demo)); */

fnCrearCookies("Nombre", "Brayan Arturo");
fnCrearCookies("Apellidos", "Gonzalez Barron");
fnCrearCookies("Direccion", "Nuevo León");

// fnBorrarCookie("Nombre");



