import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../../../../appointment/models/appointment';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent {
  @Input() public appointments: Appointment[]
  @Output() public addAppointmentEvent = new EventEmitter()
  private count = 0
  constructor() {
  }
  public addAppointment() {
    this.addAppointmentEvent.emit({title: `Hi Mom${'!'.repeat(this.count++)}`})
    console.log('adding an appointment')
  }
}
