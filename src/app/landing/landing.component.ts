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
  username='';
  password='';
  email='';
  firstName='';
  lastName='';
  constructor(private landingService: LandingService, private router:Router) { }

  ngOnInit(): void {
  }
  validateUser(){
    this.landingService.login(this.username, this.password).subscribe(data=>{
      localStorage.setItem("userId", data.id.toString(10));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", data.username);
      this.router.navigate(['/readpost']);
    });
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
  }
}
