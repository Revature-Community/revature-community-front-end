import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepliesService {
  baseUrl = 'http://localhost:8085/api/v1/responses/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getReplies(postId: Object): Observable<any> {
    return this.http.get<any>(this.baseUrl + postId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  postReply(reply:Object): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'submit-response', reply, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  updateReply(reply:object): Observable<any> { 
    return this.http.put<any>(this.baseUrl+"update", reply)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  deleteReply(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "delete/" + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  upvoteReply(reply:object): Observable<any>{
    return this.http.post<any>("http://localhost:8085/upvote/add-upvote/", reply)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getUpvotes(id: number): Observable<any>{
    return this.http.get<any>("https://localhost:8085/upvote/"+id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getDownvotes(id: number): Observable<any>{
    return this.http.get<any>("https://localhost:8085/downvotes/"+id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  downvoteReply(reply:object): Observable<any>{
    return this.http.post<any>("http://localhost:8085/downvotes/add-downvote", reply)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
}
