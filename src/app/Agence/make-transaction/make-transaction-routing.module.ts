import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeTransactionComponent } from './make-transaction.component';

const routes: Routes = [{ path: '', component: MakeTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeTransactionRoutingModule { }
