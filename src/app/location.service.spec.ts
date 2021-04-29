//
// Adapted from https://blog.knoldus.com/unit-testing-of-angular-service-with-httpclient
//
import { TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
// import { LocationService } from './location.service';
import { MockLocationService } from '../../spec/mocklocation.service.spec';
import { Observable } from 'rxjs';
import { LocationRec} from './location-rec.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';



describe('LocationService', () => {
    let service: MockLocationService;
    let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
	  imports: [HttpClientModule],
	  providers: [MockLocationService]
      });
      service = TestBed.get (MockLocationService);
      httpMock = TestBed.get (HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    //
    //   In progress, doesn't work yet...
    //
    //   This service is only tested alone for now.  To run, use
    //
    //     ng test --include="src/app/location.service.spec.ts
    //
    //    it ('API should retrieve Locations via GET', () => {
//	const fakeLocations: LocationRec[] = [
//	    { city: 'Albany' },
//	    { city: 'New York' },
//	    { city: 'San Francisco' },
//	    { city: 'Chicago' }
//	];
//	service.getAllLocations<LocationRec[]>().subscribe (locs => {
//	    expect (locs.length).toBe (4);
//	    expect (locs).toEqual (fakeLocations);
//	});
//    });
});
