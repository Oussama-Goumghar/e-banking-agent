import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosClientsRoutingModule } from './nos-clients-routing.module';
import { NosClientsComponent } from './nos-clients.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [NosClientsComponent],
    imports: [
        CommonModule,
        NosClientsRoutingModule,
        NzTableModule,
        NzSpinModule,
        NzAlertModule,
        NzBadgeModule,
        NzDropDownModule,
        NzDividerModule,
        NzGridModule
    ]
})
export class NosClientsModule { }
