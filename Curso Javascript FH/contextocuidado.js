/* Cuidado con el contexto de las funciones ya que podemos ultilizar variables que cambian su valor en algun momento del programa y nos cambia todo aquello en donde
fue utilizado */

function fnCrearFuntions() {
    var numero=1;
    var arr=[];

    arr.push(
        function () {
            console.log(numero);
            
        }
    );
    numero =2;
    arr.push(
        function () {
            console.log(numero);
        }
    );

    numero =3;
    arr.push(
        function() {
            console.log(numero);
        }
    );
   
    return arr;
}

function fnCrearFuntions2() {
    var arr=[];
    for(var numero=1; numero<=5; numero++)
        arr.push(
            (function(numero) {
                return function () {
                    console.log(numero);
                    
                }
            })(numero)
        );
    
    return arr;
}
console.log(`-.-.-.-.-.-.variable donde es afectada en el contexto.-.-.-.-.-.-`);

var funciones = fnCrearFuntions();

funciones[0]();
funciones[1]();
funciones[2]();

console.log(`-.-.-.-.-variable protegida por contexto reservado.-.-.-.-.-.-`);

var funciones2 = fnCrearFuntions2();
funciones2[0]();
funciones2[1]();
funciones2[2]();