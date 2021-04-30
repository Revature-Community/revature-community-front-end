import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

import { LocationService } from '../location.service'
import { LocationServiceMock } from '../mocks/location-service-mock'

import { LocationComponent } from './location.component';
import { Observable } from 'rxjs';
import { Loc } from '../models/location';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let httpClient: HttpClientModule; 
  let httpTestingController: HttpTestingController; 
  let locationService: LocationService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule
      ], 
      declarations: [ LocationComponent ],
      providers: [
        {provide: LocationService, useClass: LocationServiceMock }
      ]
    })
    .compileComponents();
    locationService = TestBed.inject(LocationService)
    httpClient = TestBed.inject(HttpClientModule); 
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one location`, waitForAsync(() => {
    let res = locationService.getLocations()  
      expect(res).toHaveClass("Observable"); 
  })); 
});
