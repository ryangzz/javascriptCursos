// Objeto
var objJS={
    nombre:"Brayan",
    edad:30
};

objJS.__proto__.imprimir=function() {
    console.log(`Nombre:${this.nombre}, edad:${this.edad}`);
    
}


console.log(objJS);
// El objeto se convierte a JSON
var jsonString=JSON.stringify(objJS);
// imprimimos el JSON
console.log(jsonString);
// De JSON se pasa a un objeto para poder utilizarlo de manera normal
var desdeJSON = JSON.parse(jsonString);
console.log(desdeJSON);
console.log(desdeJSON.edad);
console.log(desdeJSON.nombre);

/* Nota si el objeto contiene metodos como atributos estos
se perderan al convertise a json por lo cual es la importancia 
de usar prototipos para que nunca se pierdan. */
