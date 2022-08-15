import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private route: Router
  ){}

  canActivate(): boolean{ 
    if (this.authService.loggedIn()){//Validar la existencia del token
      return true;
    }

    this.route.navigate(['/login']);//Enviarte a loggearte
    return false;

  }
  
}
