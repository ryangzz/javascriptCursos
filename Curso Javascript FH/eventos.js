function evento(arg) {
    console.log("me dispare");
    console.log(arg.charCode);
    // Sin el . nos muestran todas las propiedades del argumento
    // y visualiza que s lo que nos puede servir
}

var objeto=document.getElementById("nombre");
console.log(objeto);
objeto.addEventListener("keypress", evento)
// Se puede usar cualqueir evento marcado dentro de los existentes