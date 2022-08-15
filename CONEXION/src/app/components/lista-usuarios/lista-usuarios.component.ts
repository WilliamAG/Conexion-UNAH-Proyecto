import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listUsuarios: Usuario[]=[];
  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      console.log(data);
      this.listUsuarios = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito','Producto Eliminado');
      this.obtenerUsuarios();
    }, error =>{
      console.log(error);
    })
  }

}

