import { Injectable } from '@angular/core';
import { Appointment } from 'projects/appointment/models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private _appointments: Appointment[] = [];

  public get appointments(): Appointment[] {
    return this._appointments;
  }

  constructor() {
    // tslint:disable-next-line: quotemark
    this._appointments.push({ title: "Dinner with Leo Marvin's Fam" });
  }

  public addAppointment(appointment: Appointment): void {
    this._appointments.push(appointment);
  }
}
