import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Event} from '../../shared/models/event.model';
import {EventsService} from '../../core/services/events.service';
import {catchError, map, mapTo} from 'rxjs/operators';

@Injectable()
export class DataService {
  private events$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  private eventStore: {
    events: Event[]
  } = {events: []};

  get events(): Observable<Event[]> {
    return this.events$.asObservable();
  }

  constructor(private eventsService: EventsService) {
  }

  loadAllEvents(): Observable<boolean> {
    return this.eventsService.getEvents().pipe(
      map(events => {
          this.eventStore.events = events;
          this.events$.next(Object.assign({}, this.eventStore).events);
        }
      ),
      mapTo(true),
      catchError((err => { console.log(err); return of(false); }))
    );
  }
}
