// Esta clase contiene ademas los metodos y tributos estaticos asi como de getter estatico
export default class Persona {
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