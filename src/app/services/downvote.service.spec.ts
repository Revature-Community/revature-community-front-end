import { TestBed } from '@angular/core/testing';
import { DownvoteService } from './downvote.service';


describe('DownvoteService', () => {
  let service: DownvoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownvoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
