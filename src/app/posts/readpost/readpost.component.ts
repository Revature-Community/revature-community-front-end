import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})
export class ReadpostComponent implements OnInit {

  constructor(private _posts:PostsService) { }


  postList: Array<Posts>=[]


  ngOnInit(): void {
    this._posts.getPosts().subscribe(data=>{
      this.postList= data;
    })
  }

}
