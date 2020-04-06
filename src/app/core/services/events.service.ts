import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry, timeout} from 'rxjs/operators';
import {Event} from '../../shared/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${this.baseUrl}/events`).pipe(
      timeout(3000),
      retry(3),
      catchError(this.handleError)
    );
  }

  getEvent(eventId: string): Observable<Event> {
    return this.httpClient.get<Event>(`${this.baseUrl}/events/${eventId}`);
  }
}
