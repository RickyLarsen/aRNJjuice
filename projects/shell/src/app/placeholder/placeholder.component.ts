import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
import { EVEE_TYPES } from '../../../../appointment/models/appointment';
import { ScheduleModuleService } from '../../services/remote-modules/remote-module.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;
  constructor(
    private scheduleService: ScheduleModuleService,
    private appointmentService: AppointmentService
  ) {}
  private scheduleRef: any;

  ngOnInit() {
    this.appointmentService.addAppointment({ title: 'Appointment from shell' });
    this.load();
  }
  async load() {
    const scheduleComponent =
      await this.scheduleService.getScheduleComponentRef();
    const ref = this.viewContainer.createComponent(scheduleComponent);
    console.log('ref is: ');
    console.log(ref);
    this.scheduleRef = ref.instance;
    this.scheduleRef.evolveEveeSubject?.subscribe(
      (evoloutionType: EVEE_TYPES) => {
        console.log(
          'in Placeholder Component.ts (shell). Evee wishes to evolve to: ',
          evoloutionType
        );
        this.appointmentService.eveeState = evoloutionType
      }
    );
  }
}
