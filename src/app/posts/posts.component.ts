import {Component, OnInit} from '@angular/core';

import {User} from '../datamodels/index';
import {UserPost} from '../datamodels/index';

import {UserService, AlertService} from '../services/index';
import {AppError} from "../app";

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'posts.component.html',
})

export class PostsComponent implements OnInit {
  private currentUser: User;
  private usersPost: UserPost[] = [];
  private model: any = {};
  private loading = false;
  private totalCount: number;
  private page = 0;

  constructor(private userService: UserService,
              private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public ngOnInit() {
    this.loadAllUsersPost();
    this.getUserPostCount();
  }

  public createPost(): void {
    this.loading = true;
    this.model.userId = this.currentUser.id;
    this.userService.createPost(this.model)
      .subscribe(() => {
        this.alertService.success('New Post Successful', true);
        this.loadAllUsersPost();
        this.getUserPostCount();
        this.loading = false;
      }, (error) => {
        this.alertService.error(error.error.message);
        this.loading = false;
      });
  }

  public getUserPostCount(): void {
    this.userService.getUserPostCount(this.currentUser.id)
      .subscribe((data: number) => {
        this.totalCount = data;
      }, (error) => {
        this.alertService.error(error.error.message);
      });
  }

  public loadMoreUsersPost(): void {
    this.page = this.page + 1;
    this.userService.getAllUserPost(this.currentUser.id, this.page, 5)
      .subscribe(
        (data: UserPost[]) => {
          for (let i = 0; i < data.length; i++) {
            this.usersPost.push(data[i]);
          }
        },(error: AppError) => {
          this.alertService.error(error.error.message);
        });
  }

  private loadAllUsersPost(): void {
    this.userService.getAllUserPost(this.currentUser.id, this.page, 5)
      .subscribe(
        (data: UserPost[]) => {
          this.usersPost = data;
        },
        error => {
          this.alertService.error(error.error.message);
        });
  }
}
