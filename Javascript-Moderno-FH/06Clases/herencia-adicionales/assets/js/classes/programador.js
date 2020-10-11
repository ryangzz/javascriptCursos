import Persona from './persona.js';
export default class Programador extends Persona {
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