import { Component, OnInit } from '@angular/core';
import { faFolderClosed } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faFolderClosed=faFolderClosed
  faMagnifyingGlass=faMagnifyingGlass
  faBookBookmark=faBookmark
  faEnvelope=faEnvelope
  faAddressBook=faAddressBook
  faCircleUser=faCircleUser
  faMoneyBill1=faMoneyBill1
  faFileLines=faFileExcel
  constructor() { }

  ngOnInit(): void {
  }

}
