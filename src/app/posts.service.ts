import { Injectable } from '@angular/core';
import { Posts } from './models/posts';

@Injectable()
export class PostsService {
  submitPost(randomPost: Posts) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  showTodayDate() {
    let ndate = new Date ();
    return ndate;
  }
}
