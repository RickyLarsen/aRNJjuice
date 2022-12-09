import { Component } from '@angular/core';
import { AppointmentService } from 'projects/appointment/src/public-api';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent {
  public appointments = this.appointmentService.appointments;

  constructor(private appointmentService: AppointmentService) {
    console.log('appointments');
    console.log(this.appointments);
  }
}
