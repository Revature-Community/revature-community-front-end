import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { SimpleChanges } from '@angular/core';
import { LocationRec } from '../location-rec.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

    
    title = "Location Component and Service Demo";
    locationinput: string = "";
    cities = new Array<LocationRec>();
    error: boolean = false;

    onKey (event: any) {
	this.locationinput = event.target.value;
    }

    constructor(private locationService: LocationService) {
	this.locationService.getAllLocations ().subscribe (data => 
	    { this.cities = data.map (item => { return new LocationRec (item.city); });})
    }

    ngOnInit(): void {
    }
}
