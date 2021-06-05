
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Agence/agence.module').then(m => m.AgenceModule) },
  { path: 'Agence', loadChildren: () => import('./Agence/agence.module').then(m => m.AgenceModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
