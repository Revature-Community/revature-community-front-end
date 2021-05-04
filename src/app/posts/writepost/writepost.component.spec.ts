import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnyNaptrRecord } from 'node:dns';
import { of } from 'rxjs'; 
import { FormsModule } from '@angular/forms';

import { LocationService } from 'src/app/location.service';
import { PostsService } from 'src/app/posts.service';

import { WritepostComponent } from './writepost.component';

describe('WritepostComponent', () => {
  let component: WritepostComponent;
  let fixture: ComponentFixture<WritepostComponent>;
  let serviceStub: any;
  let postsStub: any; 

  beforeEach(async () => {

    serviceStub = {
      getLocations: () => of(
        ['Houston, Texas', 
         'Miami, Florida']
      ),

      saveLocation: () => of([
        'New York City, New York'
      ])
    };
      

    postsStub = { 

    }

    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [ WritepostComponent ],
      providers: [ { provide: LocationService, useValue: serviceStub }, 
                   { provide: PostsService, useValue: postsStub} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
