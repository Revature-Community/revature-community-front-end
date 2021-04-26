import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  
  constructor() { }
  @Input() post: number;
  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef;
  responses = [];
  responseData = [];
  currentResponse: string;
  ngOnInit(): void {
    const data = [
      {id: 1, content: "this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythisthis is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third hello world", author: "", location: "place 1", post_id: 1},
      {id: 2, content: "this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythisthis is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third hello world", author: "", location: "place 1",  post_id: 1},
      {id: 3, content: "this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythisthis is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third hello world", author: "", location: "place 1",  post_id: 1}
    ]
    this.responseData = data;
    for (let val of data) {
      let lenless255 = false;
      if (val.content.length > 255) {
        lenless255 = true;
      }
      const resp = {id: val.id, response: val.content.slice(0,255), showMore: lenless255};
      this.responses.push(resp);
    }
  }

  handleResponses() {
    console.log(this.currentResponse)
    let lenless255 = false;
    if (this.currentResponse.length > 255) {
      lenless255 = true;
    }
    const postId = this.responseData[0].post_id;
    const newPost = {id: 4, response: this.currentResponse, post_id: postId, showMore: lenless255};
    this.responses.push(newPost);
  }
  
  showMore(id) {
    this.responses[id-1].response = this.responseData[id-1].content;
    this.responses[id-1].showMore = false;
  }

  getDisplayType(type) {
    return type ? 'inline-table' : 'x';
  }

  autoGrow() {
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
