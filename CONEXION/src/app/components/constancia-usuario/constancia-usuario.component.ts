import { Component, OnInit } from '@angular/core';
import { Constancia } from 'src/app/models/constancia';
import { ConstanciasService } from 'src/app/services/constancia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-constancia-usuario',
  templateUrl: './constancia-usuario.component.html',
  styleUrls: ['./constancia-usuario.component.css']
})
export class ConstanciaUsuarioComponent implements OnInit {
 listConstancias: Constancia[] = [];

  constructor(private _constanciaService: ConstanciasService) { }

  ngOnInit(): void {
    this.obtenerConstancias();
  }

  obtenerConstancias(){
    this._constanciaService.getConstancias().subscribe(data =>{
      console.log(data);
      this.listConstancias = data;
    },error =>{
      console.log(error);
    })
  }


  eliminarConstancia(id: any){
    this._constanciaService.eliminarConstancia(id).subscribe(data => {
        Swal.fire(
          '¡La constancia se eliminó!',
        );
        this.obtenerConstancias();
      }, error =>{
        console.log(error);
      })
  }

}