import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formLogin: FormGroup = this.fb.group({
    user: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private sAuth: AuthService,
    private route: Router
  ) {}

  login(){
    const resultado = this.sAuth.login(this.formLogin.value);

    if(resultado){
      this.route.navigate(['registrado']);      
    }else{
      alert('usuario no encontrado');
    }

  }

}
