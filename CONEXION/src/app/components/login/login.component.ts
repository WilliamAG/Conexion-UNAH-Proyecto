import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';
//import { UsuarioService } from 'src/app/services/usuario.service';
// import { FlashMessageService} from 'angular2-flash-messages';
//import { FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario = {
    correo: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

ngOnInit(): void {

  
  }

loginIn(){
  console.log('Entro al login Auth');
  this.authService.loginIn(this.usuario)
  .subscribe(
    res=>{
      alert('succes')
      console.log(res);
      localStorage.setItem('token', res.token);//Guardando de forma local el token
      console.log("probando", res);
      if(res.usuario.rol == 'C'){
        this.router.navigate(['/inicio-voae'])
        alert("Bienvenido" + " " +res.usuario.nombre)

      }else if (res.usuario.rol == 'A'){
        this.router.navigate(['/inicio'])
        alert("Bienvenido" + " " +res.usuario.nombre)
      }else{
        alert("Pagina en mantenimiento")
      }
      
    },
    err=> console.log(err)
  )
}

}




  
  //NUEVA SECCION
  //username!: String;
  //password!: String;
  //NUEVA SECCION
  /*
  constructor(
    private authService:AuthService,
    private router:Router,
    //private flashMessage:FlashMessagesModule
  ) { }*/