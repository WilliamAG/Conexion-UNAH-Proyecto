import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { ActividadInterface } from '../../models/actvidad';
import { ActividadService } from '../../services/actividad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
listActividad: ActividadInterface[]=[];

  constructor(
    private _actividadService: ActividadService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.ObtenerActividad();
  }


  logout(){
    this.router.navigate(['/landing']);
    localStorage.clear();
  }
  

  ObtenerActividad(){
    this._actividadService.getActividades().subscribe(data=>{
      console.log(data);
      this.listActividad=data;
    },error=>{
      console.log(error);
    })
  }

eliminarActividad(id: string, nombre: string) {
    Swal.fire({
      title: `¿Estás seguro que quieres eliminar la actividad "${nombre}"?`,
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.value) {
        this._actividadService.deleteActividad(id).subscribe(
          () => {
            Swal.fire(
              '¡Eliminado!',
              'La actividad ha sido eliminada.',
              'success'
            );
            this.ObtenerActividad();
          }
        );
      }
    }
    );
  }

    editarActividad(id: string) {
    this.router.navigate(['/actividad-editar', id]);
  }
}
