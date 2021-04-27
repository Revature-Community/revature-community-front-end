import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor() { }
  showTodayDate() {
    let ndate = new Date ();
    return ndate;
  }
}
