import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/index';
import {User} from '../datamodels/user';



@Component({
  moduleId: module.id.toString(),
  selector: 'account',
  templateUrl: 'account.component.html'
})

export class AccountComponent {
  currentUser: User;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getUserInfo().subscribe((currentUser: User) => {
        this.currentUser = currentUser;
      }
    );
  }
}
