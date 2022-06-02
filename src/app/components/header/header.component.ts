import { Component, OnInit } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/User Service/user.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public searchstat:boolean=false;

  faAlignJustify = faAlignJustify;
  faBell=faBell
  faEllipsis=faEllipsis
  faMagnifyingGlass=faMagnifyingGlass
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }
menuToggler(){
this.userService.toggler();
console.log("tıklandı");
console.log(this.userService.toggle.value);


}
}
