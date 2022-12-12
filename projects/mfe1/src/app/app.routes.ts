import { Routes } from '@angular/router';
import { ScheduleIntegrationComponent } from './schedule/schedule-integration/schedule-integration.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ScheduleIntegrationComponent, pathMatch: 'full' },
];
