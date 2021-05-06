import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { User } from '../models/user';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  id: string;
  username;
  password;
  email;
  firstName;
  lastName;
  loginError;
  constructor(private landingService: LandingService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("isLoggedIn") == "true"){
      this.router.navigate(['/community']);
    }
  }
  validateUser(){
    if (this.username && this.password) {
      this.landingService.login(this.username, this.password).subscribe(data=>{
        console.log('logging in', data)
        if (data) {
          localStorage.setItem("userId", data.id.toString(10));
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", data.username);
          document.getElementById("close-modal").click();
          this.router.navigate(['/community']);
        } else {
          this.loginError = 'Username and password does not match';
        }
      });
    }
  }

  createUser(){
    let user: User = new User();
    user.username = this.username;
    user.password = this.password;
    user.email = this.email;
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    this.landingService.register(user).subscribe(data=>{
      alert("Successfully registered! You may now log in.");
    });
    this.username = "";
    this.password = "";
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    
  }
}
