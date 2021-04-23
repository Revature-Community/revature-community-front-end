import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  
  constructor() { }
  responses: any;
  currentResponse: string;
  ngOnInit(): void {
    this.responses = [
      {id: 1, content: "this is a reply", post_id: 1},
      {id: 2, content: "this is a second reply", post_id: 1},
      {id: 3, content: "this is a third reply", post_id: 1}
    ]
  }

  handleResponses() {
    console.log('click');
    console.log(this.currentResponse);
    const postId = this.responses[0].post_id;
    const newPost = {id: 4, content: this.currentResponse, post_id: postId};
    this.responses.push(newPost);
    console.log('added resp', this.responses);
  }
  
}
