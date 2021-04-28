import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';

import { Loc } from '../models/location';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  // Implement validation based upon actual city names

  allLocations: string = 'all';

  locationdata: any = [];
  city = '';
  state = '';
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

  getData() {
    const url = 'http://localhost:8085/locations/';
    this.http.get(url).subscribe(res => {
      this.locationdata = res;
      console.log(this.locationdata);
    });
  }

  constructor(
    private http: HttpClient,
    private _httpservice: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  addLocation() {
    let location = new Loc(this.city, this.state);

    this._httpservice.saveLocation(location).subscribe((data: any) => {
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
}
