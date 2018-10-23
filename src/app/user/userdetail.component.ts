import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';

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
  constructor(private userService: UserService,  private activeRouter: ActivatedRoute) {
    const id = +this.activeRouter.snapshot.params['id'];
    this.user = this.userService.getUserById(id);
  }

  updateUser(ob: IUser) {
    const userList =  this.userService.userList;
    userList.forEach(function (item) {
       if (item.Username === ob.Username) {
        alert('matched: ' + ob.Username);
        alert('matched: ' + ob.LastName);
          item.LastName = ob.LastName;
          item.FirstName = ob.FirstName;
       }

    // // let userList =  this.userService.userList;

        // this.routes.navigateByUrl('user');
     });

     userList.forEach(function(a) {
      console.log(a.FirstName + ':' + a.LastName);
    });
  }

  ngOnInit() {

  }

}
