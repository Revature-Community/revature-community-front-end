import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocationRec } from '../src/app/location-rec.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MockLocationService {
    // constructor (private www: HttpClient) {}
    constructor () {}

    const fakeLocations<LocationRec[]> = [
	{ city: 'Albany' },
	{ city: 'New York' },
	{ city: 'San Francisco' },
	{ city: 'Chicago' }
    ];

    public getAllLocations (): Observable<LocationRec[]> {
	return this.fakeLocations;
    }

}

