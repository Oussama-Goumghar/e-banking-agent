import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenceRoutingModule } from './agence-routing.module';
import { AgenceComponent } from './agence.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {FooterModule} from '../shared/footer/footer.module';
import {FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';


@NgModule({
  declarations: [AgenceComponent],
  imports: [
    CommonModule,
    AgenceRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,

  ]
})
export class AgenceModule { }
