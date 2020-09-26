var reg1= RegExp("a");//Por constructor
// var reg2= /a/;//Por literal
// var reg2= /A/;//Por literal
// var texto="Hola Mundo.";
// var texto="Hola Mundo, 12345";//agregar numeros para rangos "hola..., 12344"
// var texto="Hola Mundo.\n qué tál"; //ejemplo tuberia y tildez
var texto="Holaa mundoo";
//Instruccion para hacer evaluacion con la ExpReg
// var arr=texto.match(reg1);
// var arr=texto.match(/^a/) //piquito indica al principio del string espera una a Regresara null
// var arr=texto.match(/^H/) //aqui si la encontro
// var arr=texto.match(/H$/) // dolar al final espera un carcater al final de la cadena
// var arr=texto.match(/o$/) // dolar al final espera un carcater al final de la cadena
// var arr=texto.match(/.../) // punto indica que espera cualquier caracter
// var arr=texto.match(/^.o/) // dolar al final espera un carcater al final de la cadena
// var arr=texto.match(/[0-9]/) // Rango para numeros del 0 al 9, inlcuimos numeros en var texto 
// var arr=texto.match(/[61789]/) // Esperar numeros sin rango, numeros espeficios
// var arr=texto.match(/[61789]/) // Esperar numeros sin rango, numeros espeficios
// var arr=texto.match(/[a-z]/) // Rango de letras de a hasta z pero minusculas
// var arr=texto.match(/[a-zA-Z]/) // Rango de letras a hasta z minusculas y tambien mayusculas
// var arr=texto.match(/^H[a-z]/) // Primer char espera una H y despues cualquier letra minuscula
// var arr=texto.match(/^H[aeiou]/) // Primer char espera una H y despues cualquier vocal minuscula
// var arr=texto.match(/[aeiou].$/) // Primer char espera una vocal mins y despues cualquier char al final
// var arr=texto.match(/[aeiou]./) // espera primer vocal mins que encuentre seguido de cualquier chart
// var arr=texto.match(/ /) // primer espacio que encuentre
// var arr=texto.match(/\s/); //Busca cualquier separacion que encuentre ya sea espacios o tabs
// var arr=texto.match(/\w/); // Es lo mismo que [a-zA-z0-9] espera cualquer char menos los especiales
// var arr=texto.match(/\d/); // Esperar cual quier numero igual a [0-9] ó [0123456789]
// var arr=texto.match(/m/i); // vuelve insensible lo que espera, puede ser minus o mayus
// var arr=texto.match(/./g); // Nos devuelve todas las ocurrencias en este caso todo el string
// var arr=texto.match(/[a-z]/g); // Devuelve todas las letras minusculas
// var arr=texto.match(/[a-z]/gi); // Nos devuelve todas las letras del ABC incluyendo min y mayus
// var arr=texto.match(/[aeiouá]|é/ig); // Nos devuelve todas las ocurrencias en el rango incluso las tildes
// var arr=texto.match(/o/ig); //Devuelve todas las o  aun que esten juntas
// var arr=texto.match(/o+/g); //Nos devuelve las o u cualquier cantidad de o aun que vengas pegadas
// var arr=texto.match(/o?/g); //Tiene que aparecer la o ó no tiene pero con las que no encuenta devuelve ""
                            //Hay que tene cuidado con esta  anterior por que hace mach con algo vacio
// var arr=texto.match(/o*/g) //nos devuelve las o y sus repeticiones seguidas pero tambien hace mach con ""
// var arr=texto.match(/o{2}/); //Determinamos cuantas veces tiene que aparece la o
var arr=texto.match(/o{2,3}/g) //devuelve de 2 a 3  o repetidas que encunetre y todas sus ocurrencias

console.log(arr);
