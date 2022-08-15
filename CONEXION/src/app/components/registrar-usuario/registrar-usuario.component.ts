import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  titulo ='Registrate, que esperas!';
  id: string | null;
  patronName = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute
    ) {
    this.usuarioForm = this.fb.group({
      dni:['', [Validators.required, Validators.pattern('(0|1)[0-9]{3}((19[0-9]{2})|(20[0|1])\d{1})[0-9]{5}')]],
      nombre: ['', [Validators.required, Validators.pattern(this.patronName)]],
      apellido: ['', [Validators.required, Validators.pattern(this.patronName)]],
      telefono: ['', [Validators.required, Validators.pattern('^[2,3,8,9]{1}[0-9]{7}')]],
      nacimiento: ['', Validators.required],
      facultad: ['', Validators.required],
      carrera: ['', Validators.required],
      cuenta: ['',[Validators.required, Validators.pattern('((20)[0-9]{2}[1|2|3]{1}[0-9]{6})|[0-9]{6}')]],
      rol:['', Validators.required],
      correo: ['',  [Validators.required, Validators.pattern('[A-z]{5,}@(unah\.)(edu\.hn|hn)$')]],
      password: ['', Validators.required]
      
  }) 
  this.id = this.aRouter.snapshot.paramMap.get('id');
}
    
  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario(){
    console.log(this.usuarioForm);

    const USUARIO: Usuario ={
      dni: this.usuarioForm.get('dni')?.value,
      nombre:this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      nacimiento: this.usuarioForm.get('nacimiento')?.value,
      facultad: this.usuarioForm.get('facultad')?.value,
      carrera: this.usuarioForm.get('carrera')?.value,
      cuenta: this.usuarioForm.get('cuenta')?.value,
      rol:this.usuarioForm.get('rol')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      password: this.usuarioForm.get('password')?.value
    }

    if(this.id !== null){
      //editamos
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
          this.toastr.info('El usuario fue actualizado ', 'Usuario Actualizado');
         this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.usuarioForm.reset();
      })
    } else{
      //agregamos
      console.log(USUARIO);
    this._usuarioService.guardarUsuario(USUARIO).subscribe(data=>{
      this.toastr.success('Formaras parte de esta gran comunidad!', 'Usuario Registrado');
      this.router.navigate(['/correo']);
    }, error =>{
      console.log(error);
      this.usuarioForm.reset();
    })
    }

    


  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Información';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.usuarioForm.setValue({
          dni: data.dni,
          nombre:data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          nacimiento: data.nacimiento,
          facultad: data.facultad,
          carrera: data.carrera,
          cuenta: data.cuenta,
          rol:data.rol,
          correo: data.correo,
          password: data.password
        })
      })
    }
  }

}
