class Programador {
    static dvalue = "Sin Registro";
    static porObjeto({ nombre, edad, especialidad }) {
        return new Programador(nombre, edad, especialidad);
    }
    constructor(nombre = dvalue, edad = 0, especialidad = dvalue) {
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad
    }
    obtenerInfo() {
        return `El Programador es ${this.nombre} y  tiene ${this.edad} años y su especualidad es ${this.especialidad}`;
    }
}
let luis = new Programador("Luis Segovia", 28, "Desarrollo Web");
let emma = Programador.porObjeto({ nombre: "Emmanuel Guerrero", edad: 22, especialidad: "Desarrollo Web" });
const infoLuis = luis.obtenerInfo();
const infoEmma = emma.obtenerInfo();
console.log(infoLuis);
console.log(infoEmma);