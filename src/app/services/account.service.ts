import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {User} from '../datamodels/user';

@Injectable()
export class AccountService {
  private subject = new Subject<User>();
  constructor() {}

  setUserInfo(user: User) {
    this.subject.next(user);
  }

  getUserInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
