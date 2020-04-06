import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule
  ]
})
export class SharedModule { }
