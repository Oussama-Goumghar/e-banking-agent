import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterUnClinetRoutingModule } from './Ajouter-un-clinet-routing.module';
import { AjouterUnClinetComponent } from './Ajouter-un-clinet.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzMessageModule, NzMessageService} from 'ng-zorro-antd/message';
import {NzLayoutModule} from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [AjouterUnClinetComponent],
  imports: [
    CommonModule,
    AjouterUnClinetRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzMessageModule,
    NzInputModule,
    NzLayoutModule,
  ]
})
export class AjouterUnClinetModule { }
