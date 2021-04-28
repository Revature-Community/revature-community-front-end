import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'RevatureCommunity';
<<<<<<< HEAD
  // todaydate!: Date;
  // constructor(private postsservice: PostsService){}
  // ngOnInit() {
  //   this.todaydate = this.postsservice.showTodayDate();
  // }
  constructor() {};
  ngOnInit(){
=======
  // todaydate:any;

  //This was in the constructor why? (private postsservice: PostsService)
  constructor(){}
  ngOnInit() {
    // this.todaydate = this.postsservice.showTodayDate();
  }
>>>>>>> a0576811e6dde5cceb3506ca123b60e5220e0ad5

  }
}
