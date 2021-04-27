import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    // Implement validation based upon actual city names

    locationinput: string = "";

    locationSearched : Location;
    onKey (event: any) {
	this.locationinput = event.target.value;
    }

    constructor(private locationService:LocationService) { }

  ngOnInit(): void {}
  
  findLocation(){
    this.locationService.findLocation(1).subscribe(data=>{
      this.locationSearched=data;
    });
  }
}
