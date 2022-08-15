export class Usuario{
    _id?: number;
    dni: string;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    nacimiento: Date;
    facultad: string;
    carrera: string;
    cuenta: string;
    password: string;
    rol:string;

    constructor(dni: string,nombre: string,apellido: string,correo: string, telefono: string, nacimiento: Date,
        facultad: string,carrera: string,cuenta: string, password: string, rol:string){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.nacimiento = nacimiento;
        this.facultad = facultad;
        this.carrera = carrera;
        this.cuenta = cuenta;
        this.password = password;
        this.rol = rol;
    }
}