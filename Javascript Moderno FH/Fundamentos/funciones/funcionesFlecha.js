// Funcion felcha  anonima sin retorno
(()=>{console.log("Hola desde funcion flecha anonima");})();
// Funcion Flecha anonima con retorno
let retornoFFA = (()=>{return "Hola desde el retorno de una funcion flecha anonima";})();
console.log(retornoFFA);
// Funciones flecha anonimas con argumentos y retorno
retornoFFA = ((a,b)=>{ return a+b})(2,3);
console.log(`returno Suma desde funcion flecha anonima: ${retornoFFA}`);
// Funcion flecha con retorno y argumentos
const sumar =(a,b)=>a+b;
console.log("Suma desde funcion flecha: "+sumar(2,3));
// Funcion flecha, midiendo sus argumentos
const argumentos = (...arguments)=> arguments.length;
console.log("El numero de argumentos de una funcion flecha: "+argumentos(1,2,3,4));
// Funciones flecha, controlando sus argumentos al maximo sumando solo los parametros numericos
const argumentos2 = (...args)=>{
    let suma =0;
    args.forEach(elem => {
        switch (typeof elem) {
            case "number":
                suma+=elem;
                break;
            default:
                console.log(`Èste valor no se puede sumar: ${elem}`);
                break;
        }
    });
    return suma;
}
console.log("Suma de los argumentos numericos: "+argumentos2(2,2,3,2, "abcd"));
// separando argumentos numericos de otros tipos y destructurando argumentos
const argumentos3 = (...args)=>{
    let numeros = [];
    let otros = [];
    numeros = args.filter(elem=>typeof elem=="number");
    otros = args.filter(elem=>typeof elem != "number");
    return {numeros:numeros, otros:otros};
}
let elemetosSeparados = argumentos3(2,3,2,3,2, "uno", [1,2,3], {numero:2});
console.log(elemetosSeparados);
