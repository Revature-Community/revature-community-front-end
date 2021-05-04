import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LocationService } from '../location.service';
import { LocationComponent } from './location.component';


describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>; 
  let serviceStub: any;

  beforeEach(async () => {

    serviceStub = { 
      getLocations: () => of([
        'Houston, Texas',
        'Miami, Florida']), 
      saveLocation: () => of([
        'New York City, New York'
      ])
    }; 

    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ LocationComponent ],
      providers: [ { provide: LocationService, useValue: serviceStub } ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
 
 it('should have 48 states', () => { 
   expect(component.states.length).toEqual(48); 
 })

 it('should render an html form', () => { 
   const form = fixture.debugElement.nativeElement.querySelector('.revature'); 
   expect(form).toBeTruthy(); 
 })

 it('should return an array of locations', () => { 
   expect(component.locationdata).toBeDefined();
   expect(component.locationdata).toContain('Houston, Texas'); 
 })

 it('should add new locations dynmically', () => { 
   
   component.city = 'New York City'; 
   component.state = 'New York'; 

   expect(component.addLocation()).toBeUndefined(); 
 })

 it('should change the form structure when adding a new location', () => { 
   expect(component.allLocations).toEqual('all'); 
   component.switch(); 
   expect(component.allLocations).toEqual('create'); 
   component.switch(); 
   expect(component.allLocations).toEqual('all'); 
 })

});
