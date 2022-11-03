import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistradoPage } from './registrado.page';

const routes: Routes = [
  {
    path: '',
    component: RegistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistradoPageRoutingModule {}
