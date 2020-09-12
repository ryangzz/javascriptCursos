// separando argumentos numericos de otros tipos y destructurando argumentos
const argumentos3 = (...args)=>{
    let numeros = [];
    let otros = [];
    numeros = args.filter(elem=>typeof elem=="number");
    otros = args.filter(elem=>typeof elem != "number");
    return {numeros, otros};
}
// Descructurando objetos y arreglos
let {numeros, otros} = argumentos3(2,3,2,3,2, "uno", [1,2,3], {numero:2});
console.log(numeros, otros);
let [string, arreglo, objeto] = otros;
console.log({string, arreglo, objeto});
// Destructurando objeto como argumentos
let clark = {
    nombre:"Clark Kent",
    codeName:"Superman",
    edad:16,
    superPoderes:["Super Vision", "Vision Calorifica", "Super Fuerza", "Super Velocidad", "Volar"],
}
const imprimirPropiedades = ({nombre, codeName, edad=16, superPoderes})=>{
    console.log({nombre, codeName, edad, superPoderes});
}
imprimirPropiedades(clark);