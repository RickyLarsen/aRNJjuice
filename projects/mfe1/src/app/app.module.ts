import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleModule } from './schedule/schedule.module';
import { APP_ROUTES } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, ScheduleModule, RouterModule.forRoot(APP_ROUTES), CommonModule],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
