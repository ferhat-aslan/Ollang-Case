import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faFileZipper } from '@fortawesome/free-regular-svg-icons';
import { UserService } from 'src/app/services/User Service/user.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  faLocationDot=faLocationDot
  faCircleCheck=faCircleCheck
  faTrophy=faTrophy
  faFileZipper=faFileZipper
  faClock=faClock
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
