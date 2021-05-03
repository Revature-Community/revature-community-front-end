import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';


describe('LocationService', () => {
  let service: LocationService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let baseurl: "localhost:8085/locations"

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ], 
        providers: [
            LocationService
        ]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return saved locations'), inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    const locations = 
        {"city": "Houston", 
         "state":"Texas"};

    http.get(baseurl)
    service.getLocations()
        
  })
});
