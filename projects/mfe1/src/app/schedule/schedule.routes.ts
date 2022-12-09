import { Routes } from '@angular/router';
import { FullCalendarComponent } from './calendar/full-calendar.component';

export const SCHEDULE_ROUTES: Routes = [
  {
    path: 'full-calendar',
    component: FullCalendarComponent,
  },
];
