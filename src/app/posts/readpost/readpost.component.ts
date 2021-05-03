import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs/operators';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/posts.service';
import { Loc } from '../../models/location';
import { Locations } from 'src/app/models/locations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})
export class ReadpostComponent implements OnInit {
  locationForPosts : number = 0;
  view: string = "all"

  constructor(private http: HttpClient, private _posts: PostsService) {    
  }
  

  postList: Array<Posts> = []
  locationdata: any = [];

  foodPosts: Array<Posts> = []
  housingPosts: Array<Posts> = []
  eventPosts: Array<Posts> = []
  entertainmentPosts: Array<Posts> = []
  find: false;

  ngOnInit(): void {
    this._posts.getPosts().subscribe(data => {
      this.postList = data;
      console.log(data);

    })
  
  }
// Start of post filtering methods -----------------------------------
  listFoodPosts(categoryType: string) {
    if (this.foodPosts.length >= 0) {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].categoryType === "Food") {
          if (this.foodPosts.includes(this.postList[i])) {
            break;
          }
          this.foodPosts.push(this.postList[i])

        }
      }
      this.view = categoryType;
    }
  }
  listEventPosts(categoryType: string) {
    if (this.eventPosts.length >= 0) {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].categoryType === "Event") {
          if (this.eventPosts.includes(this.postList[i])) {
            break;
          }
          this.eventPosts.push(this.postList[i])
        }
      }
      this.view = categoryType;
    }
  }
  listHousingPosts(categoryType: string) {
    if (this.housingPosts.length >= 0) {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].categoryType === "Housing") {
          if (this.housingPosts.includes(this.postList[i])) {
            break;
          }
          this.housingPosts.push(this.postList[i])
        }
      }
      this.view = categoryType;
    }
  }
  listEntertainmentPosts(categoryType: string) {
    if (this.entertainmentPosts.length == 0) {
      for (let i = 0; i < this.postList.length; i++) {
        if (this.postList[i].categoryType === "Entertainment") {

          if (this.entertainmentPosts.includes(this.postList[i])) {
            break;
          }
          this.entertainmentPosts.push(this.postList[i])
        }
      }
    }
    this.view = categoryType;
  }
// end of post filtering methods -----------------------------------

getData() {
  const url = 'http://localhost:8085/locations/';
  this.http.get(url).subscribe(res => {
    this.locationdata = res;
    console.log(this.locationdata);
  });
}

filterByLocation() {

}

//

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}