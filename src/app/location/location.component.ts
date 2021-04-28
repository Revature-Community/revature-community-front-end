import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    // Implement validation based upon actual city names

    locationinput: string = "";

    onKey (event: any) {
	this.locationinput = event.target.value;
    }
    getData(){
      const url ='http://localhost:8085/locations/'
      this.http.get(url).subscribe((res)=>{
        this.locations = res
        console.log(this.locations)
      })
    }

    public locations:any = []
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getData();
  }

}
