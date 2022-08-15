import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constancia } from '../models/constancia';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConstanciasService {
  
  private url = environment.apiUrl+'constancia/';

  constructor(private http: HttpClient) { }


  getConstancias(): Observable<any>{
    return this.http.get(this.url);
  }

  guardarConstancias(constancia: Constancia): Observable<any> {
    return this.http.post(this.url, constancia);
  }

  eliminarConstancia(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  obtenerConstancia(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  editarConstancia(id: string, constancia: Constancia): Observable<any>{
    return this.http.put(this.url + id, constancia)
  }
  }