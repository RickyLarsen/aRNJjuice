import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Appointment } from '../../../../../appointment/models/appointment';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit {
  @Input() public appointments: Appointment[];
  @Output() public addAppointmentEvent = new EventEmitter();

  public eeveeTime: boolean;

  private count = 0;
  constructor() {
  }

  ngOnInit(): void {
    this.eeveeTime = false;
    setTimeout(() => {
      this.eeveeTime = true;
    }, 2500);
  }

  public addAppointment() {
    this.addAppointmentEvent.emit({title: `Hi Mom${'!'.repeat(this.count++)}`});
    console.log('adding an appointment');
  }
}
