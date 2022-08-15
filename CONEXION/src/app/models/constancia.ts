import { ActividadComponent } from "../components/actividad/actividad.component";

export class Constancia {
    _id?: number;
    nombre: string;
    carrera: string;
    cuenta: number;
    actividad: string;
    horas: number;
    ambito: string;

    constructor(nombre: string, carrera:string, cuenta:number, actividad:string, horas: number, ambito:string){
        this.nombre = nombre;
        this.carrera = carrera;
        this.cuenta = cuenta;
        this.actividad = actividad;
        this.horas = horas;
        this.ambito = ambito;
    }
}