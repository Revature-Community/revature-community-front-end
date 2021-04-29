import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { Locations } from 'src/app/models/locations';
import { Loc } from '../../models/location';
import { Posts } from 'src/app/models/posts';
import { PostsService } from 'src/app/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-writepost',
  templateUrl: './writepost.component.html',
  styleUrls: ['./writepost.component.css'],
})
export class WritepostComponent implements OnInit {
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
  locationValue: number = 0;
  categoryType: string = '';
  randomLocation: Locations = new Locations(this.locationValue);
  randomPost: Posts = {
    title: this.title,
    content: this.content,
    location: this.randomLocation,
    categoryType: this.categoryType,
  };

  submitPost() {
    this.randomLocation = new Locations(++this.locationValue);
    this.randomPost = {
      title: this.title,
      content: this.content,
      location: this.randomLocation,
      categoryType: this.categoryType,
    };

    console.log(this.randomPost);
    console.log(this.locationValue);
    this._post.submitPost(this.randomPost).subscribe(data => {
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
    'American Samoa',
    'Arizona',
    'California',
    'Colorado',
    'Connecticut',
    'District of Columbia',
    'Delaware',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
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
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Virginia',
    'Virgin Islands',
    'Vermont',
    'Washington',
    'Wisconsin',
    'West Virginia',
    'Wyoming',
  ];

  addLocation() {
    let location = new Loc(this.city, this.state);
    console.log(location);
    this._location.saveLocation(location).subscribe((data: any) => {
      location = data;
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
    const url = 'http://localhost:8085/locations/';
    this.http.get(url).subscribe(res => {
      this.locationdata = res;
      console.log(this.locationdata);
    });
  }

  // Locations = [
  //   'Alaska',
  //   'Alabama',
  //   'Arkansas',
  //   'American Samoa',
  //   'Arizona',
  //   'California',
  //   'Colorado',
  //   'Connecticut',
  //   'District of Columbia',
  //   'Delaware',
  //   'Florida',
  //   'Georgia',
  //   'Guam',
  //   'Hawaii',
  //   'Iowa',
  //   'Idaho',
  //   'Illinois',
  //   'Indiana',
  //   'Kansas',
  //   'Kentucky',
  //   'Louisiana',
  //   'Massachusetts',
  //   'Maryland',
  //   'Maine',
  //   'Michigan',
  //   'Minnesota',
  //   'Missouri',
  //   'Mississippi',
  //   'Montana',
  //   'North Carolina',
  //   'North Dakota',
  //   'Nebraska',
  //   'New Hampshire',
  //   'New Jersey',
  //   'New Mexico',
  //   'Nevada',
  //   'New York',
  //   'Ohio',
  //   'Oklahoma',
  //   'Oregon',
  //   'Pennsylvania',
  //   'Puerto Rico',
  //   'Rhode Island',
  //   'South Carolina',
  //   'South Dakota',
  //   'Tennessee',
  //   'Texas',
  //   'Utah',
  //   'Virginia',
  //   'Virgin Islands',
  //   'Vermont',
  //   'Washington',
  //   'Wisconsin',
  //   'West Virginia',
  //   'Wyoming',
  // ];
}
