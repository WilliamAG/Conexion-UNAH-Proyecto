import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Constancia } from 'src/app/models/constancia';
import { ConstanciasService } from 'src/app/services/constancia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-constancia',
  templateUrl: './editar-constancia.component.html',
  styleUrls: ['./editar-constancia.component.css']
})
export class EditarConstanciaComponent implements OnInit {
  constanciaForm: FormGroup;

  id:string | null ;
  constructor(private fb: FormBuilder,
              private constanciaService:ConstanciasService,
              private aRouter: ActivatedRoute){ 
    this.constanciaForm = this.fb.group({
      nombre: ['', Validators.required],
      carrera: ['',Validators.required],
      cuenta: ['', Validators.required],
      actividad: ['', Validators.required],
      horas: ['', Validators.required],
      ambito: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  editarConstancia(){

    const CONSTANCIA: Constancia = {
      nombre: this.constanciaForm.get('nombre')?.value,
      carrera: this.constanciaForm.get('carrera')?.value,
      cuenta: this.constanciaForm.get('cuenta')?.value,
      actividad: this.constanciaForm.get('actividad')?.value,
      horas: this.constanciaForm.get('horas')?.value,
      ambito: this.constanciaForm.get('ambito')?.value,
    }

    if(this.id !== null){
      //EditamosConstancia

      this.constanciaService.editarConstancia(this.id, CONSTANCIA).subscribe(data => {
        if (data) {
          Swal.fire(
            'Constancia Editada Correctamente'
          )//.then((result) => {
            //this.constanciaForm.reset();
          //});
        }
      })
    }else{
       //AgregamosConstancia
      console.log(CONSTANCIA); 
      this.constanciaService.guardarConstancias(CONSTANCIA).subscribe(data=>{
  console.log(CONSTANCIA);
        if (data) {
          Swal.fire(
            'Constancia Creada Correctamente'
          ).then((result) => {
            this.constanciaForm.reset();
          });
        }
  
      })
    }

  }
  esEditar(){
    if(this.id !== null){
      this.constanciaService.obtenerConstancia(this.id).subscribe(data=>{
        this.constanciaForm.setValue({
          nombre: data.nombre,
          carrera: data.carrera,
          cuenta: data.cuenta,
          actividad: data.actividad,
          horas: data.horas,
          ambito: data.ambito,
        })
      })
    }
}
}