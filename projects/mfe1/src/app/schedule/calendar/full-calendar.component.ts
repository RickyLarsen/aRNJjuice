import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
})
export class FullCalendarComponent {
  user = this.authService.user;

  constructor(private authService: AuthLibService) {
    console.log('user');
    console.log(this.user);
  }
}
