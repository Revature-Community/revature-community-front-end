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

  randomLocation: Locations= {id:1, location:"test"};

  randomPost: Posts = {
    title: "hi", 
    content:"hello there", 
    location: this.randomLocation, 
    categoryType: "Housing"
  }
  
  submitPost(){
    console.log(this.randomPost)
    this._post.submitPost(this.randomPost).subscribe(data => {
      console.log(data);
    })
  }

}
