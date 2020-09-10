// Definiendo Arreglo vacio
let coleccionNumeros = [];
// Llenando Arreglo con numeros del 1 al 10
for(let i = 0; i<10; i++){
    coleccionNumeros.push(i+1);
}
console.log("------------Elementos de array----------------");
console.log(coleccionNumeros);
console.log("---------------------------------");
// Definiendo clase para el arreglo que sumara, multiplicara y elevara al exponente segun el indice del elemento
class Arreglos{
    constructor(arr){
        this.array = arr;
    }
    get suma(){
        return this.arrSuma();
    }
    get multiplicacion(){
        return this.arrMult();
    }
    get exponente(){
        return this.arrExp();
    }
    arrSuma(){
        return this.array.map((elem, index, array)=>{ return elem+index})
    }
    arrMult(){
        return this.array.map((elem, index, array)=>{ return elem*index})
    }
    arrExp(){
        return this.array.map((elem, index, array)=>{ return Math.pow(elem, index)})
    }
}
let arreglo1 = new Arreglos(coleccionNumeros);
console.log("------------Suma del array segun su indice----------------");
console.log("---------------------------------");
console.log(arreglo1.suma);
console.log("------------Multiplicacion del array segun su indice----------------");
console.log("---------------------------------");
console.log(arreglo1.multiplicacion);
console.log("------------Exponenciacion del array segun su indice----------------");
console.log("---------------------------------");
console.log(arreglo1.exponente);
