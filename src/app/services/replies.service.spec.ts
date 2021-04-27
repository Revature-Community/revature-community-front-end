import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RepliesService } from './replies.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';
describe('RepliesService', () => {
  let baseUrl = 'http://localhost:8085/api/v1/responses/';
  let repliesService: RepliesService;
  let response:any;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
    repliesService = TestBed.inject(RepliesService);
    response = [
      {
          "id": 1,
          "content": "drerit dolor magna. Duis ultricies lacus sed turpis tincidunt.",
          "postId": 1
      },
  ];
  });
  
  it('should be created', () => {
    expect(repliesService).toBeTruthy();
  });

    let result: any = [];

    it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      http
        .get(baseUrl)
        .subscribe(data => {
          result = data;
          expect(result).toEqual(response)
        });
  
      const req = httpMock.expectOne(baseUrl);
      expect(req).toBeDefined();
      expect(req.request.method).toEqual('GET');
      req.flush([
        {
            "id": 1,
            "content": "drerit dolor magna. Duis ultricies lacus sed turpis tincidunt.",
            "postId": 1
        },
    ]);
      httpMock.verify();
    }));

    it("should make a POST request to create a new reply", () => {
      const reply = {
        "postId": 1,
        "content": "test service...?"
      };
      repliesService.postReply(reply).subscribe();
      let req = httpTestingController.expectOne({
        method: "POST",
        url: baseUrl
      })
      expect(req.request.body).toEqual(reply)
    })
});
