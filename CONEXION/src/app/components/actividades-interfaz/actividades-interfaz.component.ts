import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActividadInterface, UsuarioInterface } from '../../models/actvidad';

@Component({
  selector: 'app-actividades-interfaz',
  templateUrl: './actividades-interfaz.component.html',
  styleUrls: ['./actividades-interfaz.component.css']
})
export class ActividadesInterfazComponent implements OnInit {
listActividad: ActividadInterface[]=[];
 
  constructor(

 private _actividadService: ActividadService,
    private router: Router
    ) {}
   


  ngOnInit(): void {
    this.ObtenerActividad();
  }

  ObtenerActividad(){
    this._actividadService.getActividades().subscribe(data=>{
      console.log(data);
      this.listActividad=data;
    },error=>{
      console.log(error);
    })
  }

}
