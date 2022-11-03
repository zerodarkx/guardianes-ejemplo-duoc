import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../home/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private sAuth: AuthService,
    private router: Router
  ){}

  canActivate(): Observable<boolean> | boolean  {

    let resultado = this.sAuth.verificarMarca();

    if(!resultado){
      this.router.navigate(['home'])
    }
    return resultado;
  }
  canLoad(): Observable<boolean> | boolean  {
    return true;
  }
}
