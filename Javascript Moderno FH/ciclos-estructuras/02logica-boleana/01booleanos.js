console.info("=====Negaciones=====");
console.log(true);
console.log(!true);
console.log(!false);
// Operador and permite ejecutar cosas siempre y cuando el retorno sea true
const regresaTrue = ()=>{
    console.log("Regresa True-->");
    return true;
}
const regresaFalse = ()=>{
    console.log("Regresa False");
    return false;
}
// Primero vamos a negar la funcion que regresa true
console.log(!regresaTrue());
// Regresa true si al final todo es true por eso vamos a negar la que es falso
console.log(`AND1 ${(regresaTrue() && !regresaFalse()).toString()}`);
// este and regresara and por que algo es false por lo tanto and regresara falso
console.log(`AND2 ${(regresaFalse()&&regresaTrue()).toString()}`);
// Como pudieron obsrvar en el ejemplo anterior solo se ejecuto la primer funcion, este es el poder
// del operador and en javascript
regresaFalse() && regresaTrue();
// Operador OR regresa true si por lo menos un valor es true si no regresa false
console.log(` OR1: ${(false || false || false || true)}`);
console.log(` OR2: ${(false || false || false || !true)}`);
// Ejemplo OR 
const noDefinido = ()=>undefined;
console.log(noDefinido());
console.log(noDefinido()||"Valor no definido");


