import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  
  constructor() { }
  @Input() postId: number | any;
  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef | any;
  responses:any = [];
  responseData:any = [];
  currentResponse:any;
  ngOnInit(): void {
    console.log(this.postId);
    const data = [
      {id: 1, content: "hello world", author: "", location: "place 1", post_id: 1},
      {id: 2, content: "this is a reply this is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis is a third replythis", author: "", location: "place 1",  post_id: 1},
      {id: 3, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae tempus. Pellentesque id nibh tortor id aliquet lectus proin. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Duis ultricies lacus sed turpis tincidunt. Semper eget duis at tellus at urna condimentum. Eget aliquet nibh praesent tristique magna sit. Metus aliquam eleifend mi in nulla posuere sollicitudin. Ipsum a arcu cursus vitae congue mauris rhoncus. Dignissim cras tincidunt lobortis feugiat vivamus at. Sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Habitant morbi tristique senectus et netus. Sed cras ornare arcu dui vivamus arcu.", author: "", location: "place 1",  post_id: 1}
    ]
    this.responseData = data;
    for (let val of data) {
      let lenless255 = false;
      if (val.content.length > 255) {
        lenless255 = true;
      }
      const resp = {id: val.id, response: val.content, show: !lenless255};
      this.responses.push(resp);
    }
  }

  handleResponses() {
    let lenless255 = false;
    this.currentResponse = this.currentResponse.trim();
    if (this.currentResponse.length > 255) {
      lenless255 = true;
    }
    const postId = this.responseData[0].post_id;
    const newPost = {id: this.responses.length+1, response: this.currentResponse, post_id: this.postId, show: !lenless255};
    this.responses.push(newPost);
    this.currentResponse = "";
  }

  changeParam(id:number){
    this.responses[id-1].show = true;
  }

  getDisplayType(type:any) {
    return type ? 'inline-table' : 'x';
  }

  autoGrow() {
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
