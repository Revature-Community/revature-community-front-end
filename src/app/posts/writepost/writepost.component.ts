import { Component, OnInit } from '@angular/core';
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

  locationForPosts : number = 0;

  constructor(
    private http: HttpClient,
    private _post: PostsService,
    private _location: LocationService
  ) {}

  ngOnInit(): void {
    this.getData();
    console.log(this.locationdata);
  }
  title: string = '';
  content: string = '';
  categoryType: string = '';
  
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
    // console.log("City: "+this.locationForPosts.city);
    // console.log("State: "+this.locationForPosts.state);
    this._post.submitPost(this.userPost).subscribe(data => {
      console.log(data);
    });
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
    console.log(location);
    this._location.saveLocation(location).subscribe((data) => {
      this.locationForPosts = data.id;
    });
  }

  switch() {
    if (this.allLocations.match('all')) {
      this.allLocations = 'create';
    } else if (this.allLocations.match('create')) {
      this.allLocations = 'all';
    }
  }

  getData() {
    this._location.getLocations().subscribe(res => {
      this.locationdata = res;
      console.log(this.locationdata);
    });
  }

  addLocationToPost() {
    this.userPost.locationId.location = this.city + ", " + this.state
  }


}
