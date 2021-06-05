import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenceComponent } from './agence.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: AgenceComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) ,
      },
      {
       path: 'Accueil',
        loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) ,
      },

      {
        path: 'ajouter-un-clinet',
        loadChildren: () => import('./Ajouter-un-clinet/Ajouter-un-clinet.module').then(m => m.AjouterUnClinetModule) ,
      },


      {
        path: 'transactions',
        loadChildren: () => import('./Transactions/Transactions.module').then(m => m.TransactionsModule),
      },

      {
        path: 'nos-clients',
        loadChildren: () => import('./nos-clients/nos-clients.module').then(m => m.NosClientsModule)      },


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenceRoutingModule { }
