import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ScrollingModule} from '@angular/cdk/scrolling';

//components
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
//import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';

//Providers
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { CambiarPasswordComponent } from './components/cambiar-password/cambiar-password.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActividadNuevaComponent } from './components/actividad-nueva/actividad-nueva.component';
import { ActividadesInterfazComponent } from './components/actividades-interfaz/actividades-interfaz.component';
import { ActividadesVoaeInterfazComponent } from './components/actividades-voae-interfaz/actividades-voae-interfaz.component';
import { CorreoComponent } from './components/correo/correo.component';
import { InicioVoaeComponent } from './components/inicio-voae/inicio-voae.component';
import { EditarConstanciaComponent } from './components/editar-constancia/editar-constancia.component';
import { ListarConstanciasVoaeComponent } from './components/listar-constancias-voae/listar-constancias-voae.component';
import { ConstanciaUsuarioComponent } from './components/constancia-usuario/constancia-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    ListaUsuariosComponent,
    //InicioComponent,
    LandingPageComponent,
    LoginComponent,
    InicioComponent,
    RecuperarCuentaComponent,
    CambiarPasswordComponent,
    ActividadComponent,
    ActividadNuevaComponent,
    ActividadesInterfazComponent,
    ActividadesVoaeInterfazComponent,
    CorreoComponent,
    InicioVoaeComponent,
    EditarConstanciaComponent,
    ListarConstanciasVoaeComponent,
    ConstanciaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [ AuthGuard,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
