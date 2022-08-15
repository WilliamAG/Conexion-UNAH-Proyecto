import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActividadService } from '../../services/actividad.service';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ActividadInterface } from '../../models/actvidad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-nueva',
  templateUrl: './actividad-nueva.component.html',
  styleUrls: ['./actividad-nueva.component.css'],
})
export class ActividadNuevaComponent implements OnInit {

  actividad: ActividadInterface = {}
  id: string = '';
  edit = false;

  form = this.fb.group({
    nombre: ['', [Validators.required]],
    area: ['', [Validators.required]],
    horasArt: [, [Validators.required]],
    descripcion: ['', [Validators.required]],
    modalidad: ['', [Validators.required]],
    direccionPlataforma: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
    hora: ['', [Validators.required]],
    facultad: ['', [Validators.required]],
    encargados: ['', [Validators.required]],
    urlImagen: ['', [Validators.required]],
    terminos: [, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private actividadSrv: ActividadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // obtener el id de la actividad
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.id = id;
        this.getActividad(id);
        this.edit = true;
      }
    });

  }

  // Obtner actividad por id
  getActividad(id: string) {
    this.actividadSrv.getActividad(id).subscribe((actividad: ActividadInterface | any) => {
      // llenar el formulario con la actividad
      actividad.fecha = new Date(actividad.fecha).toISOString().substring(0, 10);
      this.form.patchValue(actividad);
    });
  }


  // Actualizar o crear actividad
  submit() {
    const actividad: ActividadInterface | any = this.form.getRawValue();

    // si esta en modo editar, actualizar actividad
    if (this.edit) {
      this.updateActividad(actividad);
    }

    // si no esta en modo editar, crear actividad
    if (!this.edit) {
      this.saveActividad(actividad);
    }

  }


  // Guardar actividad 
  saveActividad(actividad: ActividadInterface | any) {
    this.actividadSrv.postActividades(actividad).subscribe((resp) => {
      if (resp) {
        Swal.fire(
          'Listo!',
          'Actividad creada satisfactoriamente!',
          'success'
        ).then((result) => {
          this.form.reset();
          this.router.navigateByUrl('/actividades-voae');
        });
      }
      if (!resp) {
        Swal.fire('Algo salio mal!', 'No se pudo crear la actividad!', 'error');
      }
    });

  }

  // Actualizar actividad
  updateActividad( actividad: ActividadInterface | any) {
    this.actividadSrv.putActividad(this.id, actividad).subscribe((resp) => {
      if (resp) {
        Swal.fire(
          'Listo!',
          'Actividad actualizada satisfactoriamente!',
          'success'
        ).then((result) => {
          this.form.reset();
          this.router.navigateByUrl('/inicio-voae');
        });
      }
      if (!resp) {
        Swal.fire('Algo salio mal!', 'No se pudo actualizar la actividad!', 'error');
      }
    });
  }

  onFileChange(e: Event | any) {
    const imagen = new FormData();
    try {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        imagen.append('image', file);
        this.actividadSrv.postImagen(imagen).subscribe((url) => {
          this.form.patchValue({
            urlImagen: url,
          });
        });
      }
    } catch (error) {
      console.log('error');
    }
  }
}
