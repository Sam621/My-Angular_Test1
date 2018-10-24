import { Component, OnInit } from '@angular/core';


import { IUser } from './Iuser';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})

export class UserdetailComponent implements OnInit {

  user: IUser;
  userList: IUser[];
  constructor( private router: Router, private userService: UserService, private activeRouter: ActivatedRoute) {
    const id = +this.activeRouter.snapshot.params['id'];
    this.user = this.userService.getUserById(id);
  }

  updateUser(ob: IUser) {
    this.userList =  this.userService.userList;
    for (let i = 0; i <  this.userList.length; i++) {
        if (this.userList[i].Username === ob.Username) {
          this.userList[i].FirstName = ob.FirstName;
          this.userList[i].LastName = ob.LastName;
          break;
        }
    }

    // this.userList.forEach(function (item) {
    //    if (item.Username === ob.Username) {
    //       item.LastName = ob.LastName;
    //       item.FirstName = ob.FirstName;
    //    }
    // // let userList =  this.userService.userList;

        // this.routes.navigateByUrl('user');
     // });

     this.userList.forEach(function(a) {
      console.log(a.FirstName + ':' + a.LastName);
    });
    this.userService.setUserList(this.userList);
    this.router.navigate(['/user']);
  }

  ngOnInit() {

  }

}
