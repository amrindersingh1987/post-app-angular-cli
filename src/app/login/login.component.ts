import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AlertService, AuthenticationService, AccountService} from '../services/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private accountService: AccountService) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.accountService.setUserInfo(null);

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe((user: any) => {
          if (user && user.accessToken) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.accountService.setUserInfo(JSON.parse(localStorage.getItem('currentUser')));
          }
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.alertService.error(error.error.message);
          this.loading = false;
        });
  }
}
