
function Persona(nombre, apellido){

this.nombre=nombre;
this.apellido=apellido;
this.edad=30;
this.imprimirNombre=function(){
	return this.nombre + " " + this.apellido + "(" + this.edad + ")";
};
}

var juan= new Persona("Juan", "Moreno");

// console.log(juan.imprimirNombre())
//  MI MEJOR AMIGO NO SE RESISTE A MI VAGINA VIRGEN Y HUMEDA Y SE CORRE