import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevatureCommunity';
  todaydate;
  constructor(private postsservice: PostsService){}
  ngOnInit() {
    // this.todaydate = this.postsservice.showTodayDate();
  }
}
