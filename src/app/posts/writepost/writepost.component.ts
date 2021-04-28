import { Component, OnInit } from '@angular/core';
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

  randomPost: Posts = {title: 'Project 3', content: 'random stuff', location: '{}', categoryType: 'Housing'}
 
  // Pulled from Post Service, I recieve errors when I subscribe 
  // submitPost(){
  //   this._post.submitPost(this.randomPost).subscribe(data => {
  //     console.log(data);
  //   })
  //}

}
