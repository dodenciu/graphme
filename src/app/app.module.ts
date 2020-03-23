import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule)},
  {path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)},
  {path: '**', redirectTo: 'events'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
