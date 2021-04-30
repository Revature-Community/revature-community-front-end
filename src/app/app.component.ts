import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'RevatureCommunity';
  // todaydate:any;

  //This was in the constructor why? (private postsservice: PostsService)
  constructor(){}
  ngOnInit() {
    // this.todaydate = this.postsservice.showTodayDate();
  }
}
