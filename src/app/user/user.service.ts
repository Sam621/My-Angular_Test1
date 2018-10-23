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
      FirstName: 'John',
      LastName: 'Michel',
      Active: false
    },
    {
      FirstName: 'John2',
      LastName: 'Michel2',
      Active: false
    },
    {
      FirstName: 'John3',
      LastName: 'Michel3',
      Active: false
    }];

  getUserList(): IUser[] {
    return this.userList;
    }


    getUserById(Id: number): IUser {
            return this.userList[Id];
      }
}
