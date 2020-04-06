import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import {DataService} from './data.service';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [EventComponent, EventsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class EventsModule { }
