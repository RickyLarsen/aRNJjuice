import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarComponent } from './calendar/full-calendar.component';
import { RouterModule } from '@angular/router';
import { SCHEDULE_ROUTES } from './schedule.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SCHEDULE_ROUTES)],
  declarations: [FullCalendarComponent],
})
export class ScheduleModule {}
