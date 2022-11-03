import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistradoPageRoutingModule } from './registrado-routing.module';

import { RegistradoPage } from './registrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistradoPageRoutingModule
  ],
  declarations: [RegistradoPage]
})
export class RegistradoPageModule {}
