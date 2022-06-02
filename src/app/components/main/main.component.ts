import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/User Service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit , OnDestroy{
  id: number=0;
  sub!:Subscription;
  constructor(public userSer:UserService,private route:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe((params:any) => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.userSer.getUser(this.id);



    });
    console.log(this.userSer.user);
  }

}
