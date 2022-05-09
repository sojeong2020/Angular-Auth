import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-fetchusers',
  templateUrl: './fetchusers.component.html',
  styleUrls: ['./fetchusers.component.css']
})

export class FetchusersComponent implements OnInit {
content? : any;


  constructor(private userService: UserService) { 
    this.userService.fetchUsers().subscribe( result =>{
      console.log(result,"result!!!")
      this.content = result
       
    });
  }

  ngOnInit(): void {
   }
  
}
