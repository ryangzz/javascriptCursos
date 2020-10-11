let arr = ["Mario", "zalo", "Ruben"];
// imprimimos todo el arreglo
console.log(arr);
console.log("--------------------------------------");
// Imprimirmos cada elemento
console.log(arr[0], arr[1], arr[2]);
console.log("--------------------------------------");
let arr2 = [true, "Hola Mundo", function(){console.log("Hola");}, ()=>{console.log("arrow func");}, {a:2, b:"Hola"}, 12];
// Ejecutando las funciones del arreglo
arr2.forEach(x => {(typeof x ==="function") ? x(): console.log(x);});
console.log("--------------------------------------");
// Definiendo el tipo de dato de los elementos de un arreglo con POO JS ECMAC6
class TipoDeDato{
    constructor(arreglo){
        this.arreglo = arreglo;
    }
    get desArr(){
        return this.desctrucArr();
    }
    desctrucArr(){
        this.arreglo.forEach((elem, index, arr) => {
            (typeof elem ==="function") ? console.log("Una Funcion en la posicion "+index):
            (typeof elem ==="number") ? console.log("Un Numero en la posicion " + index) :
            (typeof elem ==="boolean") ? console.log("Un Boleano en la posicion "+index) :
            (typeof elem ==="string") ? console.log("Un string en la posicion "+index) :
            console.log("Un Objeto en la posicion " + index);
        });
    }
}
let elementos = new TipoDeDato(arr2);
elementos.desArr;