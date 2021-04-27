import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent implements OnInit {
  title = 'location-list';
  public locations:any = []
  constructor(private http: HttpClient) {
    
  }

  getData(){
    const url ='http://localhost:8085/locations/'
    this.http.get(url).subscribe((res)=>{
      this.locations = res
      console.log(this.locations)
    })
  }

  ngOnInit(): void {
    this.getData()
  }

}
