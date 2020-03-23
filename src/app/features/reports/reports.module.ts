import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './components/reports/reports.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
