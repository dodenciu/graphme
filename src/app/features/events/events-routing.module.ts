import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from './components/event/event.component';
import {EventsListComponent} from './components/events-list/events-list.component';

const routes: Routes = [{path: '', component: EventsListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
