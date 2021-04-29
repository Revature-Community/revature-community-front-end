import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationRec} from './location-rec.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

    // 
    // The json-server docs describe the GET attributes:
    //
    //   https://github.com/typicode/json-server#readme
    //
    private TEST_GET_ALL_CITIES = "http://localhost:3000/cities/?";
    private TEST_GET_ALL_CITIES_SORT = "http://localhost:3000/cities/?_sort=city&_order=asc";
    private TEST_GET_CITY_BY_NAME = "http://localhost:3000/cities?q="; // + city name
    private TEST_POST_CITY = "http://localhost:3000/cities";
    

    constructor(private www: HttpClient) { }

    public getAll (): Observable<LocationRec[]> {
	return this.www.get<LocationRec[]>(this.TEST_GET_ALL_CITIES_SORT);
    }

    public post (city: string) {
	let rec = new LocationRec (city);
	const headers = { 'content-type': 'application/json' };
	let logmsg: string = "";

	logmsg.concat ("POST: ", city);

	this.www.post<LocationRec>(this.TEST_POST_CITY,
				   JSON.stringify (rec),
				   {'headers': headers}).
	    subscribe (data => {console.log (logmsg);});

    }

    // To construct an observer, subscribe to the Array<LocationRec[]>
    // that this method returns like this:
    //
    // this.locationService.get (<city_name_str>).subscribe (data =>
    //   { this.cities = data.map (item => {return new LocationRec (item.city); });});
    //
    public get (city: string): Observable<LocationRec[]> {
	let httpquery: string = this.TEST_GET_CITY_BY_NAME;
	httpquery += city;
	return this.www.get<LocationRec[]>(httpquery);
    }
}
