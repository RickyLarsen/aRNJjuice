import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
// import { ScheduleIntegrationComponent } from 'projects/mfe1/src/app/schedule/schedule-integration/schedule-integration.component';
import { ScheduleModuleService } from '../../services/remote-modules/remote-module.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  constructor(private scheduleService: ScheduleModuleService, private appointmentService: AppointmentService) { }
  private scheduleRef: any

  ngOnInit() {
    this.appointmentService.addAppointment({title: 'Appointment from shell'})
    this.load()
  }
  async load() {
    const scheduleComponent = await this.scheduleService.getScheduleComponentRef()
    const ref = this.viewContainer.createComponent(scheduleComponent)
    console.log('ref is: ')
    console.log(ref)
    this.scheduleRef = ref.instance
    this.scheduleRef.addAppointmentSubject?.subscribe((appointment: Appointment) => {
      console.log('in Home Component.ts (shell). A new appointment has been emitted: ', appointment)
      this.appointmentService.addAppointment(appointment)
    })
  }




}
