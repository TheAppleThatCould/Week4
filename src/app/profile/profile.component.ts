import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName = "";
  birthDate = "";
  email = "";
  age = "";
  valid: boolean = false;   

  constructor(private router: Router) {
    this.userName = sessionStorage.getItem("userName") || "";
    this.birthDate = sessionStorage.getItem("birthDate") || "";
    this.email = sessionStorage.getItem("email") || "";
    this.age = sessionStorage.getItem("age") || "";
    this.valid = sessionStorage.getItem("valid") === 'true' || false;

    if(this.valid == false){
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

  public saveData() {
    sessionStorage.setItem("userName", this.userName);
    sessionStorage.setItem("birthDate", this.birthDate);
    sessionStorage.setItem("email", this.email);
    sessionStorage.setItem("age", this.age);
  }
}
