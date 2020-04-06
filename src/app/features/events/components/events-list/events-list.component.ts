import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  areEventsLoaded = new Observable<boolean>();

  constructor(public dataService: DataService) {
    this.areEventsLoaded = this.dataService.loadAllEvents();
  }

  ngOnInit(): void {
  }

}
