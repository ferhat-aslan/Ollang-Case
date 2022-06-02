import { Component, ElementRef } from '@angular/core';
import { UserService } from './services/User Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(public userSer:UserService){}
//[ngClass]="{disabled: (students === null) ? true : false}"
}
