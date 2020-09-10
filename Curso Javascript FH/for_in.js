var persona=function() {
    this.nombre="Fernando";
    this.apellido="Herrera";
    this.edad=35;
}

var juan = new persona();

persona.prototype.direccion="San José";

for( propiedad in juan){
    //con esa condicion evaluamos solo las propiedades originales del obj y no los prototipos
    if(!juan.hasOwnProperty(propiedad))
        continue;
    // Con eso imprimimos la propiedad y el segundo paramettro es el valor de la propiedad
    console.log(propiedad,":", juan[propiedad]);
    // console.log();
}

/* 
Esta estructura no es correcta para su recorrido ya que devuelve los indices
for(arr in [1,2,3,4,5,6,7,8,9]){
    console.log(arr);
    
} */
console.log("FOR EACH==============================");
//ciclo for each que nos ayuda a recorrer cualquier estructura de datos devolviendonos los valores del 
// mismo
[1,2,3,4,5,juan, "Fernando", true, false, [1,2,3,4]].forEach(function (val) {
    console.log(val);
    
})

