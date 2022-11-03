import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data: any){
    if (data.user == 'admin' && data.password == '123456'){
      localStorage.setItem('registrado', 'x');
      return true;
    }else{
      return false;
    }
  }

  verificarMarca(){
    const marca = localStorage.getItem('registrado');
    if (marca == 'x') {
      return true;
    }else{
      return false;
    }
  }
}
