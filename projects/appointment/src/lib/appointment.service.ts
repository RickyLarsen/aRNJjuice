import { Injectable } from '@angular/core';
import { Appointment } from 'projects/appointment/models/appointment';
import { EVEE_TYPES } from '../../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private _appointments: Appointment[] = [];
  private _eveeState: EVEE_TYPES = EVEE_TYPES.BASE

  public get appointments(): Appointment[] {
    return this._appointments;
  }
  public get eveeState() {
    return this._eveeState
  }
  public set eveeState(evType: EVEE_TYPES){
    this._eveeState = evType
  }

  constructor() {
    // tslint:disable-next-line: quotemark
    this._appointments.push({ title: "Dinner with Leo Marvin's Fam" });
  }

  public addAppointment(appointment: Appointment): void {
    this._appointments.push(appointment);
    console.log('in appointment service. appointments are: ', this._appointments)
  }
}
