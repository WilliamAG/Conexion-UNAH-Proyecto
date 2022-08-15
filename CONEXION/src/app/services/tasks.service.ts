import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}
    
    getTarea(){
      return this.http.get<any>(this.URL+'/tarea');
    }

    getPrivateTarea(){
      return this.http.get<any>(this.URL+'/privateTarea');
    }

    getUsuario(){
      return this.http.get<any>(this.URL);
    }


   
}
