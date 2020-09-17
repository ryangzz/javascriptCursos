/* Mostrar si un sitio web esta abierto o no
entre semana abren a las 11 y el fin de semana a las 9
dias de la de mana indexados del 0 al 6 empezando por el domingo
*/
let dia=6;
let horaActual=8;
let horaApertura;
let mensaje;
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
mensaje = (horaActual>=horaApertura) ? "Esta abierto" : `Esta cerrado hoy abrimos a las ${horaApertura}`;
console.log(mensaje);