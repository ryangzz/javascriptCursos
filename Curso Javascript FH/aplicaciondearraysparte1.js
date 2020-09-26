
var person=[];
var phones=[];

function Person(name, phone) {
    this.nombre=name;
    this.telefono=phone;
}

var personas= new Person(person, phones);

Person.prototype.showPerson = function() {
    console.log("Mostrando Elementos");
    for(let i=0; i<this.nombre.length; i++){
        console.log(this.nombre[i] + " " + this.telefono[i]);       
    }
}

Person.prototype.upperCase = function() {
    this.nombre=this.nombre.map(function(elem) {
      return elem.toUpperCase();  
    });  
    console.log("Se Aplico Upper Case Con Éxito");
}

Person.prototype.reverseitems = function() {
    this.nombre.reverse();
    this.telefono.reverse();
    console.log("Se invirtieron los elementos correctamente");
}

Person.prototype.getFullName = function (){
    let fullname=this.nombre.join(" ");
    console.log("Nombre completo: "+fullname);
}

Person.prototype.addNameToTop = function(name, number) {
    this.nombre.unshift(name);
    this.telefono.unshift(number);
    console.log("Se agrego al principio elementos correctamente");
}

function fnAddElements() {
    person.push(document.getElementById("nombre").value);
    phones.push(document.getElementById("numero").value);
    console.log("Elementos agregados Exitosamente");
}