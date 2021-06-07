import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosClientsComponent } from './nos-clients.component';

const routes: Routes = [{ path: '', component: NosClientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosClientsRoutingModule { }
