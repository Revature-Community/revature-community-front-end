import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

import { Loc } from '../models/location';

import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    // Implement validation based upon actual city names

    locationinput: string; 
    Location = new Loc;

    locationdata: any = []; 

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

    onKey (event: any) {
	this.locationinput = event.target.value;
    }

    getData(){
      const url ='http://localhost:8085/locations/'
      this.http.get(url).subscribe((res)=>{
        this.locationdata = res
        console.log(this.locationdata)
      })
    }

  constructor(private http: HttpClient, private _httpservice:LocationService, private router:Router) { } 

  ngOnInit(): void {
    this.getData();
  }

  addLocation() {
    this._httpservice.saveLocation(this.Location).subscribe((data:any) => {
      this.Location = data; 
    })
    this.Location = new Loc; 
  } 
    
}
