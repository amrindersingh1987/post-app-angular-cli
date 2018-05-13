import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserPost } from '../datamodels/index';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

  getAllUserPost(id: number, page: number, size: number ) {
        return this.http.get<UserPost[]>('/api/user-post/' + id + '?page=' + page + '&size=' + size);
  }
  createPost(userPost: UserPost) {
    return this.http.post('/api/create-post', userPost);
  }

  getUserPostCount(id: number) {
        return this.http.get('/api/user-post-count/' + id);
  }
}
