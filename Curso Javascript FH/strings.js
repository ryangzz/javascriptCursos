var a = new String("Stringste");
console.log(a);

var b ="Herrara";

console.log(a.toUpperCase());
console.log(a.toLowerCase());
// Tomando 
var i= a.indexOf("t");
console.log(`La letra esta: ${i}`);
// Tomando la ultima posicion en la que aprece un caracter repetido
i=a.lastIndexOf("s");
console.log(`La letra esta en ${i}`);
// Tomando solo la primer palabra, nombre.indexOf determina hasta donde cortara debido
//a que regresa el numero de prosicion
var nombre="Fernando Herrera";
nombre=nombre.substr(0, nombre.indexOf(" "));
console.log(nombre);

var fecha='2020-23-04';
fecha=fecha.split("-");
console.log(fecha);
console.log(`dia:${fecha[1]}, mes: ${fecha[2]}, año: ${fecha[0]}`);
