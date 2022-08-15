import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { InicioComponent } from './components/inicio/inicio.component';

//provaiders
import { AuthGuard } from './auth.guard'; 
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { ActividadesInterfazComponent } from './components/actividades-interfaz/actividades-interfaz.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActividadesVoaeInterfazComponent } from './components/actividades-voae-interfaz/actividades-voae-interfaz.component';
import { ActividadNuevaComponent } from './components/actividad-nueva/actividad-nueva.component';
import { CorreoComponent } from './components/correo/correo.component';
import { InicioVoaeComponent } from './components/inicio-voae/inicio-voae.component';
import { EditarConstanciaComponent } from './components/editar-constancia/editar-constancia.component';
import { ListarConstanciasVoaeComponent } from './components/listar-constancias-voae/listar-constancias-voae.component';
import { ConstanciaUsuarioComponent } from './components/constancia-usuario/constancia-usuario.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},//pathMatch: 'full'
  { path: 'registrar-usuario',component: RegistrarUsuarioComponent},
  { path: 'editar-usuario/:id', component:RegistrarUsuarioComponent},
  { path: 'login', component:LoginComponent},
  { path: 'landing-page', component:LandingPageComponent},
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent},
  { path: 'cambiar-contraseña', component: CambiarPasswordComponent, canActivate: [AuthGuard]},
  { path: 'inicio', component:InicioComponent, canActivate:[AuthGuard]},
  { path: 'correo', component:CorreoComponent},
  { path: 'inicio-voae', component:InicioVoaeComponent, canActivate:[AuthGuard]},

  // Rutas de Actividades
  { path: 'actividades-interfaz', component: ActividadesInterfazComponent, canActivate:[AuthGuard]},
  { path: 'actividad', component: ActividadComponent, canActivate:[AuthGuard] },


  //constancias
  {path: 'constancias',component: ConstanciaUsuarioComponent},

   {path: 'listar-constanciasvoae',component: ListarConstanciasVoaeComponent},
  { path: 'crear-constancia', component: EditarConstanciaComponent},
  { path: 'editar-constancia/:id', component: EditarConstanciaComponent},
  /*
  { path: 'crear-constancia', component: EditarConstanciaComponent},
  {path: 'listar-constanciasvoae',component: ListarConstanciasVoaeComponent},
  { path: 'editar-constancia/:id', component: EditarConstanciaComponent},
*/
   // Actividades VOAE Routes
  { path: 'actividades-voae', component: ActividadesVoaeInterfazComponent, canActivate:[AuthGuard]},
  { path: 'actividad-nueva', component: ActividadNuevaComponent , canActivate:[AuthGuard]},
  { path: 'actividad-editar/:id', component: ActividadNuevaComponent, canActivate:[AuthGuard] },


  { path: '**', redirectTo:'', pathMatch: 'full'}//DEBE SER SIEMPRE LA ULTIMA

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
