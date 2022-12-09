import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
import { ScheduleIntegrationComponent } from 'projects/mfe1/src/app/schedule/schedule-integration/schedule-integration.component';
import { ScheduleModuleService } from '../../services/remote-modules/remote-module.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  public scheduleRef: ScheduleIntegrationComponent
  constructor(private scheduleService: ScheduleModuleService, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.load()
  }
  async load() {
    const scheduleComponent = await this.scheduleService.getScheduleComponentRef()
    const ref = this.viewContainer.createComponent(scheduleComponent)
    console.log('ref is: ')
    console.log(ref)
    this.scheduleRef = ref.instance as ScheduleIntegrationComponent
    this.scheduleRef.addAppointmentSubject.subscribe((appointment: Appointment) => {
      this.appointmentService.addAppointment(appointment)
    })
  }




}
