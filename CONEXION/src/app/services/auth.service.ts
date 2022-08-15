import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment.prod';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.apiUrl + 'usuario';

  constructor(private http: HttpClient, private router: Router) { }
  
  
  loginIn(usuario: any){
    return this.http.post<any>(this.URL + '/loginIn', usuario);
  }

  loggedIn(): Boolean{
    return !!(localStorage.getItem('token'));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout( ){
    localStorage.removeItem('token');
    this.router.navigate(['/loggedIn']);
  }

  getUsuario(){
    return this.http.get<any>(this.URL+'user');
  }
  
}


