import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
import { BehaviorSubject } from 'rxjs';
import { EVEE_TYPES } from '../../../../../appointment/models/appointment';

@Component({
  selector: 'app-schedule-integration',
  templateUrl: './schedule-integration.component.html',
  styleUrls: ['./schedule-integration.component.css'],
})
export class ScheduleIntegrationComponent implements OnInit {
  public get appointments(): Appointment[] {
    return this.appointmentService.appointments;
  }
  public get eveeState(): EVEE_TYPES {
    return this.appointmentService.eveeState;
  }
  private defaultAddAppointmentConfig: Appointment = { title: '' };
  public addAppointmentSubject: BehaviorSubject<Appointment> =
    new BehaviorSubject<Appointment>(this.defaultAddAppointmentConfig);
  public evolveEveeSubject: BehaviorSubject<EVEE_TYPES> =
    new BehaviorSubject<EVEE_TYPES>(EVEE_TYPES.BASE);

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {}

  public addAppointment(appointment: Appointment) {
    console.log(
      'In Schedule Integration Component. adding appointment: ',
      appointment
    );
    this.addAppointmentSubject.next(appointment);
  }
  public evolveEvee(evolveType: EVEE_TYPES) {
    console.log('sending evees wish: ', evolveType);
    this.evolveEveeSubject.next(evolveType);
  }
}
