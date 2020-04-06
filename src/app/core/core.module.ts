import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ]
})
export class CoreModule { }
