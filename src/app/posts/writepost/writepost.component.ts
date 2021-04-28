import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Locations } from 'src/app/models/locations';
=======
>>>>>>> d76aa66d2576522c4ec6097f4b418d6be90b4fdf
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

<<<<<<< HEAD
  randomLocation: Locations= {id:2};

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
=======
  randomPost: Posts = {title: 'Project 3', content: 'random stuff', location: '{}', categoryType: 'Housing'}
 
  // Pulled from Post Service, I recieve errors when I subscribe 
  // submitPost(){
  //   this._post.submitPost(this.randomPost).subscribe(data => {
  //     console.log(data);
  //   })
  //}

}
>>>>>>> d76aa66d2576522c4ec6097f4b418d6be90b4fdf
