import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterUnClinetComponent } from './Ajouter-un-clinet.component';
const routes: Routes = [{ path: '', component: AjouterUnClinetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterUnClinetRoutingModule { }
