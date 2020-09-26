function Persona(nombre, numero) {
    this.name= nombre;
    this.number= numero;  
}

Persona.prototype.imprimir=function() {
    console.log("nombre: " + this.name + " numero: " + this.number);
    
}

function fnEnviar() {
    let nombre=document.getElementById("nombre").value;
    let numero=document.getElementById("numero").value;
    var person= new Persona(nombre, numero);
    person.imprimir();
}

Number.prototype.fnEsPositivo=function () {
    (this>0) ? console.log("Es positivo"): console.log("Es Negativo");
}