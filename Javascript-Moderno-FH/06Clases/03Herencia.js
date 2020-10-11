// Esta clase contiene ademas los metodos y tributos estaticos asi como de getter estatico
class Persona {
    static _conteo = 0;
    static get getTotalPersonas() {
        return `${Persona._conteo} instancias`;
    }
    nombre = '';
    edad = '';
    estudios = '';
    ocupacion = '';
    constructor(nombre = 'SIN NOMBRE', edad = 0, estudios = 'Estudios No Registrados') {
        this.nombre = nombre;
        this.edad = edad;
        this.estudios = estudios;
        Persona._conteo++;
    }

    set setOcupacion(ocupacion) {
        this.ocupacion = ocupacion.toUpperCase();
    }
    get getocupacion() {
        return this.ocupacion;
    }
    obtenerInfo() {
        return `La persona se llama ${this.nombre} y tiene ${this.edad} años, estudio ${this.estudios} y su ocupacion es ${this.getocupacion}`;
    }
}

class Programador extends Persona {
    lenguaje = "";
    static defaulValue = "No hay registro";
    constructor(nombre = Programador.defaulValue, edad = 0, estudios = Programador.defaulValue, lenguaje = Programador.defaulValue) {
        super(nombre, edad, estudios);
        this.lenguaje = lenguaje;
    }
    obtenerInfo() {
            console.log(`${`${super.obtenerInfo()} Especializado en ${this.lenguaje}`}`);
    }
}

let brayan = new Programador("Brayan Gonzalez", 23, "Ciencias Computacionales", "JavaScript");
brayan.setOcupacion = "Desarrollador Web";
brayan.obtenerInfo();