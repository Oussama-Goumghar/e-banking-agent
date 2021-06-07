import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosClientsRoutingModule } from './nos-clients-routing.module';
import { NosClientsComponent } from './nos-clients.component';
import {NzTableModule} from 'ng-zorro-antd/table';


@NgModule({
  declarations: [NosClientsComponent],
    imports: [
        CommonModule,
        NosClientsRoutingModule,
        NzTableModule
    ]
})
export class NosClientsModule { }
