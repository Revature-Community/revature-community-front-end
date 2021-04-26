import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    

    locationinput: string = "";

    onKey (event: any) {
	this.locationinput = event.target.value;
    }

    constructor() { }

  ngOnInit(): void {

  }

}
