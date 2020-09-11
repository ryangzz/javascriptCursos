// Practica con arreglos y POO en JS en su ECMAC6
let juegos = ["zelda", "Mario", "Mario Car"];

class Arreglos{
    constructor(arr){
        this.arreglo = arr;
    }

    get primerElemento(){
        return this.getPrimerElemento();
    }
    getPrimerElemento(){
        return this.arreglo[0];
    }
    get ultimoElemento(){
        return this.getUltimoElemento();
    }
    getUltimoElemento(){
        return this.arreglo[this.arreglo.length-1];
    }
    set intertartElementoInicio(elem){
        return this.setElementoInicio(elem);
    }
    setElementoInicio(elem){
        this.arreglo.unshift(elem);
    }
    set intertartElementoFinal(elem){
        return this.setElementoFinal(elem);
    }
    setElementoFinal(elem){
        this.arreglo.push(elem);
    }
    get elementos(){
        return this.getElementos();
    }
    getElementos(){
        return this.arreglo;
    }
    get delUltimoElemento(){
        return this.deleteUltimoElemento();
    }
    deleteUltimoElemento(){
        this.arreglo.pop();
    }
    get delPrimerElemento(){
        return this.deletePrimerElemento();
    }
    deletePrimerElemento(){
        return this.arreglo.splice(0, 1);
    }
    getBuscarElemento(elem){
        return this.validarElementoBuscado(this.arreglo.indexOf(elem));
    }
    validarElementoBuscado(indice){
        return (indice<0) ? "Elemento No Encontrado" : `El elemento esta en la posicion ${indice}`;
    }
}
// Instanciando objeto Arreglos
let arreglosObj = new Arreglos(juegos);
//Mostrando El primer elemento Por medio de un getter
console.log(arreglosObj.primerElemento);
// Mostrando el ultimo elemento por medio de un setter
console.log(arreglosObj.ultimoElemento);
// Mostrando todos los elementos
console.log(arreglosObj.elementos);
// Insertantdo elemento al Inicio
arreglosObj.intertartElementoInicio="yoshiland";
// Insertantdo elemento al Final
arreglosObj.intertartElementoFinal="Mario Galaxy";
//Mostrando El primer elemento Por medio de un getter
console.log(arreglosObj.primerElemento);
// Mostrando el ultimo elemento por medio de un setter
console.log(arreglosObj.ultimoElemento);
// Mostrando todos los elementos
console.log(arreglosObj.elementos);
// Eliminar ultimo elemento del arreglo
arreglosObj.delUltimoElemento;
//Mostrando El primer elemento Por medio de un getter
console.log(arreglosObj.primerElemento);
// Mostrando el ultimo elemento por medio de un setter
console.log(arreglosObj.ultimoElemento);
// Mostrando todos los elementos
console.log(arreglosObj.elementos);
//Eliminado el primer elemento
console.log(arreglosObj.delPrimerElemento);
//Mostrando El primer elemento Por medio de un getter
console.log(arreglosObj.primerElemento);
// Mostrando el ultimo elemento por medio de un setter
console.log(arreglosObj.ultimoElemento);
// Mostrando todos los elementos
console.log(arreglosObj.elementos);
// Buscando un elemento en el arreglo
console.log(arreglosObj.getBuscarElemento("Mario"));
