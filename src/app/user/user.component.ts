import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './Iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: IUser[];
  constructor(private userService: UserService) {
    this.users = userService.getUserList();
   }

  ngOnInit() {

  }

}
