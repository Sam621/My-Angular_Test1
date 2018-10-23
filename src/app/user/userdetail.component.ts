import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { IUser } from './Iuser';
import { UserService } from './user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {

  router: Routes;
  user: IUser;
  constructor(private userService: UserService, private routes: Routes) {
    this.user = this.userService.getUserById(2);
    this.router = routes;
  }

  updateUser(ob: IUser) {
    alert('testing');
     this.userService.userList.forEach(function (item) {
        item.LastName = ob.LastName;
        this.routes.navigateByUrl('user');
     });
  }

  ngOnInit() {

  }

}
