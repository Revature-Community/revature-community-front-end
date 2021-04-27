import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Locations} from './locations'

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
// Base url
baseurl = 'http://localhost:8080/locations/';

constructor(private http: HttpClient) { }
 // Http Headers
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


 // GET
 GetLocations(): Observable<Locations> {
  return this.http.get<Locations>(this.baseurl)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}

// GET
GetLocation(id: any): Observable<Locations> {
  return this.http.get<Locations>(this.baseurl + id)
  .pipe(
    retry(1),
    catchError(this.errorHandl)
  )
}


// Error handling
errorHandl(error: any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}