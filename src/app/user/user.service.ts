import { Injectable } from '@angular/core';
import {IUser} from './IUser';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export class UserService {

  userList: IUser[] = [
    {
      Username: 'John',
      FirstName: 'John',
      LastName: 'Michel',
      Active: false
    },
    {
      Username: 'John2',
      FirstName: 'John2',
      LastName: 'Michel2',
      Active: false
    },
    {
      Username: 'John3',
      FirstName: 'John3',
      LastName: 'Michel3',
      Active: false
    }];

  getUserList(): IUser[] {
    return this.userList;
    }
    setUserList(userList:  IUser[]) {
      return this.userList = userList;
      }

    getUserById(Id: number): IUser {
            return this.userList[Id];
      }
}
