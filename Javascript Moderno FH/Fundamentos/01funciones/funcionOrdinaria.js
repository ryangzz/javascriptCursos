// Funcion anonima sin retorno
(function(){ console.log("Hola desde una funcion anonima sin retorno y sin asignacion");})();
// Manera simple de declarara una funcion sin argumentos y sin retorno
function saludar(){
    console.log("Hola mundo");
}
saludar();
// Funcion anonima asiganada a una variable sin argumentos y sin retorno
const saludar2 = function (){
    console.log("Hola desde una funcion anonima asignada");
}
saludar2();
// Funcion simple con argumentos sin con retorno
function sumar(a,b) {
    return a+b;
}
console.log("suma desde simple "+sumar(2,2));
// Funcion anonima asignada a una variable 
const sumar2 = function (a,b){
    return a+b;
}
console.log("Suma desde funcion anonima "+sumar2(2,2));
// mostrando numero de argumentos
const argumentos = function(a){
    return arguments.length;
}
console.log("Numero de argumentos "+argumentos(1,2,3,4,3));
// Aprovechando el atributo arguments para solo sumar los argumentos numericos
const argumentos2=function(){
    let arg = [...arguments];
    let suma = 0;
    arg.forEach(function(elem) {
        switch (typeof elem) {
            case "number":
                suma+=elem;
                break;
        }
    });
    return `Suma de los argumentos de tipo number ${suma}`;
}
console.log(argumentos2(2,3,4,3,3));