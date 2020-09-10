// Creamos un objeto 
var carro = {
     color:"Blanco",
     marca:"Mazda",
     imprimir:function () {
        //  Este this apunta al contexto de este obj
         var salida = `${this.marca} - ${this.color}`;
         return salida;
     }
}

var carro2={
    color:"Nogro",
    marca:"Nissan"
}
// Mandamos a llamar lal funcion imprimir ya retorna valor
console.log(carro.imprimir());
// Creamos una funcion que apunta a la funcion imprimir desde el objeto windows
// Esto nos dara un error de referencia
var logCarro = function(args1, args2) {
    console.log(`Carro: ${this.imprimir()}`);
    console.log(args1, args2);
    console.log("=================================");
}  
// Redirecionamos el objeto logcarro para que apunte al contexto del obj carro
var modelcarlog=logCarro.bind(carro);
// Y al final podemos impirimir el objeto caroo sin ningun problrma
logCarro.bind(carro)("Hola", "hola 2");
modelcarlog("abc", "xyz");
modelcarlog.call(carro, "123", "123");
logCarro.call(carro, "lksd", "ojnsd");
// La diferencia que hay con el apply es que este recibe solo dos paramentos el obj o el contexto al que 
// Va apuntar y un arreglo con n paramentros que recibira el metodo
modelcarlog.apply(carro, ["234", "234"]);

// Funcinoes prestadas
console.log(carro.imprimir.call(carro2));
