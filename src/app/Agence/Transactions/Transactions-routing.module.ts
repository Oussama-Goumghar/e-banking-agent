import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './Transactions.component';
import {NosClientsComponent} from '../nos-clients/nos-clients.component';

// @ts-ignore
const routes: Routes = [{ path: '', component: TransactionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
