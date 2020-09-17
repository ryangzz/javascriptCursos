// caso problema
let juan = {nombre:"juan"};
let ana = juan;
ana.nombre = "ana";
// vemos que se cambio en ambos, es por el paso de valor por referencia......
console.log({juan, ana});
// caso de solucion
let marcos = {nombre:"marcos"};
// destrucutando el objeto lo que hace que se rompa la referencia y reasigne la variable con una posicion de memoria diferente
let zalo = {...marcos};
zalo.nombre = "zalo";
console.log({marcos, zalo});

// Segundo caso problema
let yogi = {nombre:"yogi"};
const cambiarNombre = (nombre, persona)=> persona.nombre=nombre;
let tonny = cambiarNombre("tonny", yogi);
console.log({yogi, tonny});
// Segundo caso solucion, pasa lo mismo en el caso uno y se resuleve de la misma manera
let nelson = {nombre:"nelson"};
const cambiarNombre2 = (nombre, {...persona}) => persona.nombre = nombre;
let mario = cambiarNombre2("mario", nelson);
console.log({nelson, mario});
// Caso problema 3 con arreglos
let frutas = ["manzana", "mango"];
let frutas2 = frutas;
frutas2.push("melon");
console.table({frutas, frutas2});
// Solucion caso 3, debido que se afetan los arreglos mutuamente entonces pasamos a destructurarlo
let furtas3 = ["Melon", "Sandia"];
let frutas4 = [...furtas3];
frutas4.push("Guayaba");
console.table({furtas3, frutas4});