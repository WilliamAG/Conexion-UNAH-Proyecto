import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActividadInterface, UsuarioInterface } from '../../models/actvidad';



@Component({
  selector: 'app-actividades-voae-interfaz',
  templateUrl: './actividades-voae-interfaz.component.html',
  styleUrls: ['./actividades-voae-interfaz.component.css'],
})
export class ActividadesVoaeInterfazComponent implements OnInit {
  actividades: ActividadInterface[] = [];
  usuarios: UsuarioInterface[] | undefined = [];

  constructor(private actividadSrv: ActividadService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerActividades();
  }

  // obtener todas las actividades
  obtenerActividades() {
    this.actividadSrv
      .getActividades()
      .subscribe((actividades: ActividadInterface[]) => {
        this.actividades = actividades;
        console.log(this.actividades);
      });
  }

  // eliminar actividad
  eliminarActividad(id: string, nombre: string) {
    Swal.fire({
      title: `¿Estás seguro que quieres eliminar la actividad "${nombre}"?`,
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!',
    }).then((result) => {
      if (result.value) {
        this.actividadSrv.deleteActividad(id).subscribe(() => {
          Swal.fire(
            '¡Eliminado!',
            'La actividad ha sido eliminada.',
            'success'
          );
          this.obtenerActividades();
        });
      }
    });
  }

  // Editar actividad
  editarActividad(id: string) {
    this.router.navigate(['/actividad-editar', id]);
  }

  listaUsuariosActividad(id: string) {
    this.router.navigate(['/usuarios-actividad', id]);
  }

  // Obtener Usuarios de la actividad seleccionada
  obtenerUsuariosActividad(id: string) {
    const actividad = this.actividades.find(
      (actividad) => actividad._id === id
    );
    console.log('Viendo la actividad: ', actividad);
    this.usuarios = actividad!.usuarios;
    console.log('Viendo los usuarios: ', this.usuarios);
  }

  // Listar Usuarios de actividad
  get usuariosActividad() {
    return this.usuarios;
  }
}
