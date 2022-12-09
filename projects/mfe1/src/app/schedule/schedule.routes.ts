import { Routes } from '@angular/router';
import { FullCalendarComponent } from './calendar/full-calendar.component';
import { ScheduleIntegrationComponent } from './schedule-integration/schedule-integration.component';

export const SCHEDULE_ROUTES: Routes = [
  {
    path: 'full-calendar',
    component: ScheduleIntegrationComponent,
  },
];
