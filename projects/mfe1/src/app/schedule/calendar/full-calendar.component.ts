import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Appointment, EVEE_TYPES } from '../../../../../appointment/models/appointment';


@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent implements OnInit {
  @Input() public appointments: Appointment[];
  @Input() public eveeState: EVEE_TYPES;
  @Output() public evolveEveeEvent = new EventEmitter<EVEE_TYPES>();
  public EVEETYPES = EVEE_TYPES;
  public eeveeTime: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.eeveeTime = false;
    setTimeout(() => {
      this.eeveeTime = true;
    }, 2500);
  }

  public evolveEvee(type: EVEE_TYPES): void {
    console.log('I am little evee and I want to evolve into: ', type);
    console.log('\'Evee\'s state is: \'', this.eveeState);
    switch (type) {
      case EVEE_TYPES.FLAREON:
        this.evolveEveeEvent.emit(EVEE_TYPES.FLAREON);
        break;
      case EVEE_TYPES.JOLTEON:
        this.evolveEveeEvent.emit(EVEE_TYPES.JOLTEON);
        break;
      case EVEE_TYPES.VAPOREON:
        this.evolveEveeEvent.emit(EVEE_TYPES.VAPOREON);
        break;
    }
  }
}
