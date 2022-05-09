import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-fetchuser',
  templateUrl: './fetchuser.component.html',
  styleUrls: ['./fetchuser.component.css']
})
export class FetchuserComponent implements OnInit {
  singleUser: any ;

  constructor(public userService: UserService,
              private actRoute: ActivatedRoute) {

                let id = this.actRoute.snapshot.paramMap.get('id');
                console.log(id,"id!!")

                this.userService.fetchUser(id).subscribe((result)=>{
                  console.log(result,"<<<<single user result!")
                  this.singleUser = result;
                })
               }

  ngOnInit(): void {
  }

}
