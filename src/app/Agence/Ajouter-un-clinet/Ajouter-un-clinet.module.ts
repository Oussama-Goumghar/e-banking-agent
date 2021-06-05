import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterUnClinetRoutingModule } from './Ajouter-un-clinet-routing.module';
import { AjouterUnClinetComponent } from './Ajouter-un-clinet.component';


@NgModule({
  declarations: [AjouterUnClinetComponent],
  imports: [
    CommonModule,
    AjouterUnClinetRoutingModule
  ]
})
export class AjouterUnClinetModule { }
