import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/models/locations';
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
  title: string = '';
  content: string = '';
  locationValue: number = 0;
  categoryType: string = '';
  randomLocation: Locations = new Locations(this.locationValue)
  randomPost: Posts = {title: this.title, content: this.content, location: this.randomLocation, categoryType: this.categoryType}
 
  submitPost(){
    this.randomLocation= new Locations(++this.locationValue);
    this.randomPost = {title: this.title, content: this.content, location: this.randomLocation, categoryType: this.categoryType}

    console.log(this.randomPost);
    console.log(this.locationValue);
    this._post.submitPost(this.randomPost).subscribe(data => {
      console.log(data);
    })
  }

  Locations = ["Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"]

}
