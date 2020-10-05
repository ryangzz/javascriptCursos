class Persona {
    nombre = '';
    apellidoP = '';
    apeillidoM = '';
    edad = '';
    email = '';

    constructor(nombre = 'No hay dato', apellidoP = 'No hay dato', apellidoM = 'No hay dato', edad = 0, email = 'No hay dato') {
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apeillidoM = apellidoM;
        this.edad = edad;
        this.email = email;
    }

    nombreCompleto() {
            console.log(`El Nombre Completo es: ${`${this.nombre} ${this.apellidoP} ${this.apeillidoM}`}`);
    }
}
let luis = new Persona("Luis Enrique", "Segovia", "Valdez", 27, "luis@mail.com");
luis.nombreCompleto();