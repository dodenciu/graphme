import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsHeaderComponent } from './components/events-header/events-header.component';
import { EventsComponent } from './components/events/events.component';


@NgModule({
  declarations: [EventsHeaderComponent, EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
