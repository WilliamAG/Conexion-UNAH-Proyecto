import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public get authService(): AuthService {
    return this._authService;
  }
  public set authService(value: AuthService) {
    this._authService = value;
  }
  constructor(
    private _authService: AuthService
  ){};
  //title = 'conexion_unah';
}

