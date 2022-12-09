import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../../../../appointment/models/appointment';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent {
  @Input() appointments: Appointment[]
  private count = 0
  constructor() {
  }
  @Output() public addAppointmentEvent: EventEmitter<Appointment> = new EventEmitter<Appointment>()
  public addAppointment() {
    this.addAppointmentEvent.emit({title: `Hi Mom ${'!'.repeat(this.count)}`})
  }
}
