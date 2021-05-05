import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LocationService } from 'src/app/location.service';

import { Loc } from '../../models/location';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/posts.service';
import { HttpClient } from '@angular/common/http';
import { Locations } from 'src/app/models/locations';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css'],
})
export class WritepostComponent implements OnInit {

  @ViewChild('textArea', { read: ElementRef }) textArea: ElementRef | any;
  locationForPosts : number = 0;

  constructor(
    private http: HttpClient,
    private _post: PostsService,
    private _location: LocationService
  ) {}
  title: string = '';
  content: string = '';
  categoryType: string = '';
  visible:boolean = false;
  username:string='';
  displayCreate:string='false';
  error:string='';
  
  ngOnInit(): void {
    this.getData();
    this.username = localStorage.getItem("username")[0];
  }
  
  userPost: Posts = {
    title: this.title,
    content: this.content,
    locationId: new Locations(0),
    categoryType: this.categoryType,
  };

  submitPost() {
    let postLocation = new Locations(this.locationForPosts, "")
    let x = parseInt(localStorage.getItem("userId"));
    this.userPost = {
      title: this.title,
      content: this.content,
      locationId: postLocation,
      categoryType: this.categoryType,
      userId: x,
      username: localStorage.getItem("username")
    };
    console.log("user id:" + localStorage.getItem("userId") + " and " + x);

    // Console loggin info
    console.log(this.userPost);
    console.log(this.locationForPosts);

    this._post.submitPost(this.userPost).subscribe(data => {
    });

    document.getElementById("cancel-post").click();
    document.getElementById("create-post").blur();
  }

  //Location component functions
  allLocations: string = 'all';
  city = '';
  state = '';
  locationdata: any = [];

  states = [
    'Alaska',
    'Alabama',
    'Arkansas',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Iowa',
    'Idaho',
    'Illinois',
    'Indiana',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Massachusetts',
    'Maryland',
    'Maine',
    'Michigan',
    'Minnesota',
    'Missouri',
    'Mississippi',
    'Montana',
    'North Carolina',
    'North Dakota',
    'Nebraska',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'Nevada',
    'New York',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming',
  ];

  addLocation() {
    let location = new Loc(this.city, this.state);
    console.log('state', this.state);
    if(this.city && this.state) {
      this._location.saveLocation(location).subscribe((data) => {
        this.locationForPosts = data.id;
      });
      this.toggleCreateLocation();
    }
    this.error = "State and City cannot be empty.";
  }

  toggleCreateLocation() {
    this.visible = !this.visible;
  }

  getData() {
    this._location.getLocations().subscribe(res => {
      this.locationdata = res;
      console.log(this.locationdata);
    });
  }

  addLocationToPost() {
    // this.userPost.locationId.location = this.city + ", " + this.state;
    this.userPost.locationId.city = this.city;
    this.userPost.locationId.state = this.state;
  }

  cancelPost() {

  }

  autoGrow() {
    console.log("hello")
    const textArea = this.textArea.nativeElement;
    textArea.style.overflow = 'hidden';
    textArea.style.height = '5rem';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
  blurInput() {
    document.getElementById("create-post").blur();
  }

}
