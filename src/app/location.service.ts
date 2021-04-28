import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationRec} from './location-rec.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

    private MOCK_ALL_CITIES = "http://localhost:3000/cities/?";
    private MOCK_CITY_BY_NAME = "http://localhost:3000/cities/?q="; // + city name
    

    constructor(private www: HttpClient) { }

    public getAllLocations (): Observable<LocationRec[]> {
	return this.www.get<LocationRec[]>(this.MOCK_ALL_CITIES);
    }
}
