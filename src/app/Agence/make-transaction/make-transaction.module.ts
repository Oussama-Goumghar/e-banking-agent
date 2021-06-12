import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeTransactionRoutingModule } from './make-transaction-routing.module';
import { MakeTransactionComponent } from './make-transaction.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzModalModule} from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [MakeTransactionComponent],
  imports: [
    CommonModule,
    MakeTransactionRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzTableModule,
    NzSelectModule,
    NzMessageModule,
    NzModalModule
  ]
})
export class MakeTransactionModule { }
