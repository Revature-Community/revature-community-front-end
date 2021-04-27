import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loc } from './models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = 'http://localhost:8085/locations/';

  constructor(private _http: HttpClient) { }

  //POST
  saveLocation(location: Loc): Observable<object> { 
    return this._http.post(this.baseUrl + "add/" + location.city + location.state, location)
  }


}
