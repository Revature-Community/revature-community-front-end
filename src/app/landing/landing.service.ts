import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  baseurl = 'http://localhost:9095/users/'
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  login(uname: string, pass: string): Observable<User> {
    let credentials = {
      email: uname,
      password: pass
    }
    return this.http.post<User>(`${this.baseurl}login`, JSON.stringify(credentials), this.httpOptions)
  }
  register(user: User) {
    return this.http.post<Object>(`${this.baseurl}add`, JSON.stringify(user), this.httpOptions)
  }
}
