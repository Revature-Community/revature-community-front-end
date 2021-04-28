import { TestBed } from '@angular/core/testing';

import { LocationsvcService } from './locationsvc.service';

describe('LocationsvcService', () => {
  let service: LocationsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
