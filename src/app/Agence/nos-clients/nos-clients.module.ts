import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosClientsRoutingModule } from './nos-clients-routing.module';
import { NosClientsComponent } from './nos-clients.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzAlertModule} from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [NosClientsComponent],
  imports: [
    CommonModule,
    NosClientsRoutingModule,
    NzTableModule,
    NzSpinModule,
    NzAlertModule
  ]
})
export class NosClientsModule { }
