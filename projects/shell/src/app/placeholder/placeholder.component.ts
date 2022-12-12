import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppointmentService } from 'auth-lib';
import { Appointment } from 'projects/appointment/models/appointment';
import { EVEE_TYPES } from '../../../../appointment/models/appointment';
import { ScheduleModuleService } from '../../services/remote-modules/remote-module.service';

enum STONE_TYPES {
  DEFAULT = 'none',
  FIRE = 'fire',
  THUNDER = 'thunder',
  WATER = 'water',
}
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
  private _selectedStone: STONE_TYPES = STONE_TYPES.DEFAULT
  public get selectedStone(){return this._selectedStone}
  public set selectedStone(newStone: STONE_TYPES){this._selectedStone = newStone}
  public STONETYPES = STONE_TYPES


  ngOnInit() {
    this.appointmentService.addAppointment({ title: 'Appointment from shell' });
    this.load();
  }
  public 
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
        if((evoloutionType === EVEE_TYPES.FLAREON && this._selectedStone === STONE_TYPES.FIRE) || 
        (evoloutionType === EVEE_TYPES.JOLTEON && this._selectedStone === STONE_TYPES.THUNDER) || 
        (evoloutionType === EVEE_TYPES.VAPOREON && this._selectedStone === STONE_TYPES.WATER)){
          this.appointmentService.eveeState = evoloutionType
        }
      }
    );
  }
}
