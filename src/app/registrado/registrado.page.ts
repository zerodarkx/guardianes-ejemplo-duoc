import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrado',
  templateUrl: './registrado.page.html',
  styleUrls: ['./registrado.page.scss'],
})
export class RegistradoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    // localStorage.clear();
    localStorage.removeItem('registrado');
    this.router.navigate(['home'])

  }

}
