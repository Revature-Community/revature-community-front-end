import { Component, OnInit } from '@angular/core';
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
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
  }
  validateUser(){
    this.landingService.login(this.username, this.password).subscribe(data=>{
      localStorage.setItem("userId", data.id.toString(10));
      localStorage.setItem("isLoggedIn", "true");
    });
  }

  createUser(){
    
  }
}
