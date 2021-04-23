import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  
  constructor() { }
  responses = [];
  responseData = [];
  currentResponse: string;
  ngOnInit(): void {
    const data = [
      {id: 1, content: "this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythisthis is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third hello world", author: "", location: "place 1", post_id: 1},
      {id: 2, content: "this is a second reply", author: "", location: "place 1",  post_id: 1},
      {id: 3, content: "this is a third reply", author: "", location: "place 1",  post_id: 1}
    ]
    this.responseData = data;
    for (let val of data) {
      let more = false;
      if (val.content.length > 255) {
        more = true;
      }
      const resp = {id: val.id, response: val.content.slice(0,255), showMore: more};
      this.responses.push(resp);
    }
  }

  handleResponses() {
    const postId = this.responses[0].post_id;
    const newPost = {id: 4, content: this.currentResponse, post_id: postId};
    this.responses.push(newPost);
    console.log('added resp', this.responses);
  }
  
  showMore() {
    console.log('showme plsz')
    this.responses[0].response = this.responseData[0].content;
    this.responses[0].showMore = false;
  }

  getDisplayType(type) {
    console.log(type)
    return type ? 'inline-table' : 'x';
  }
}
