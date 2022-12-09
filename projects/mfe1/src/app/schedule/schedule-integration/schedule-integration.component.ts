import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from 'projects/appointment/models/appointment';
import { AppointmentService } from 'projects/appointment/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { FullCalendarComponent } from '../calendar/full-calendar.component';

@Component({
  selector: 'app-schedule-integration',
  templateUrl: './schedule-integration.component.html',
  styleUrls: ['./schedule-integration.component.css']
})
export class ScheduleIntegrationComponent implements OnInit {

  public appointments = this.appointmentService.appointments ?? [];
  private defaultAddAppointmentConfig: Appointment = {title: ''}
  public addAppointmentSubject: BehaviorSubject<Appointment> = new BehaviorSubject<Appointment>(this.defaultAddAppointmentConfig);

  constructor(private appointmentService: AppointmentService) {
    console.log('appointments');
    console.log(this.appointments);
   }

  ngOnInit(): void {
  }

  public addAppointment(appointment: Appointment){
    this.addAppointmentSubject.next(appointment)
  }
}
