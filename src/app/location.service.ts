import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseurl='localhost:8085/locations/'
  constructor(private http:HttpClient) {}

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  findLocation(locationId: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseurl}${locationId}`);
  }
}
