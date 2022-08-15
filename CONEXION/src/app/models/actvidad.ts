export interface ActividadInterface {
  _id?: string;
  nombre?: string;
  area?: string;
  horasArt?: number;
  descripcion?: string;
  modalidad?: string;
  direccionPlataforma?: string;
  fecha?: string;
  hora?: string;
  facultad?: string;
  encargados?: string;
  urlImagen?: string;
  usuarios?: UsuarioInterface[];
}

export interface UsuarioInterface {
  _id?: string;
  dni?: string;
  nombre?: string;
  apellido?: string;
  telefono?: string;
  nacimiento?: Date;
  facultad?: string;
  carrera?: string;
  cuenta?: string;
  rol?: string;
  correo?: string;
  password?: string;
  fechaCreacion?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
