import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-schedule-integration',
  templateUrl: './schedule-integration.component.html',
  styleUrls: ['./schedule-integration.component.css'],
})
export class ScheduleIntegrationComponent implements OnInit {
  public get appointments(): Appointment[] {
    console.log(
      'calling get appointments. appointments are: ',
      this.appointmentService.appointments
    );
    return this.appointmentService.appointments;
  }
  private defaultAddAppointmentConfig: Appointment = { title: '' };
  public addAppointmentSubject: BehaviorSubject<Appointment> =
    new BehaviorSubject<Appointment>(this.defaultAddAppointmentConfig);

  constructor(private appointmentService: AppointmentService) {
    console.log('appointments');
    console.log(this.appointments);
  }

  ngOnInit(): void {}

  public addAppointment(appointment: Appointment) {
    console.log(
      'In Schedule Integration Component. adding appointment: ',
      appointment
    );
    this.addAppointmentSubject.next(appointment);
  }
}
