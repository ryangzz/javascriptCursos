// definicion de arreglos
var arr = [5,4,3,2,1];
console.log(arr);
//manera de acceder al arrelgo
console.log(arr[0], arr[4], arr[5]);

//funcion que nos invierte el orden del array
arr.reverse();
console.log(arr);
// Funcion map nos permite cambiar la estructura
//del arreglo mediante una funcion
arr= arr.map(function(elem) {
        elem*=elem;
        return elem;
    }
);
console.log(arr);

// Mapeo para obtener la raiz de cada elemento
arr = arr.map(Math.sqrt);
console.log(arr);

//funcion que nos une el array en un solo string
//dentro de los () va el separador de cada elem
arr = arr.join("|");
console.log(arr);

/* A diferencia del join esta funcion nos separa el una cadena
en los () van el parametro de como lo vamos a separar */
arr=arr.split("|");
console.log(arr);

/* Funcion que nos ayuda insertar elementos al final
del arreglo */
arr.push("6");
console.log(arr);

/* Funcion que nos ayuda insertar elementos al pricipio del 
arreglo */
arr.unshift("0");
console.log(arr);
 
/* Funcion que nos elimina el ultimo elemento del arreglo */
var elimine=arr.pop();
console.log(arr, elimine);

/*  Funcion que nos ayuda a eliminar elementos mediante
un rango definido en dentro de los parentesis e insertar
antes de la posicion del primer paramentro*/
arr.splice(1, 3, "10", "20", "30");
console.log(arr);

/* Funcion que nos permite cortar elementos del array
apartir de un rango, el primer parametro es donde inicia
y el segundo hasta donde llega sin incluir el limite */
arr=arr.slice(2, 3);
console.log(arr);

