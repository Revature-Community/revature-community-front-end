import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/models/locations';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css']
})
export class WritepostComponent implements OnInit {

  constructor(private _post:PostsService) { }

  ngOnInit(): void {
  }
  title: string = '';
  content: string = '';
  locationValue: number = 0;
  categoryType: string = '';
  randomLocation: Locations = new Locations(this.locationValue)
  randomPost: Posts = {title: this.title, content: this.content, location: this.randomLocation, categoryType: this.categoryType}
 
  submitPost(){
    this.randomLocation= new Locations(this.locationValue);
    this.randomPost = {title: this.title, content: this.content, location: this.randomLocation, categoryType: this.categoryType}

    console.log(this.randomPost);
    console.log(this.title);
    console.log(this.content);
    console.log(this.locationValue);
    this._post.submitPost(this.randomPost).subscribe(data => {
      console.log(data);
    })
  }

}
