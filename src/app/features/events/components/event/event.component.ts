import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../shared/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
