import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountsArray = [
    {userName: "abc@gmail.com", password: "123"},
    {userName: "bbb@gmail.com", password: "222"},
    {userName: "ccc@gmail.com", password: "333"},
  ]

  userName = "";
  password = "";
  displayErrorMessage: boolean = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {    
    var valid: boolean = false
    this.accountsArray.map((el) => {
      if(el.userName == this.userName && el.password == this.password){
        valid = true
        this.displayErrorMessage = false
      } else {
        this.displayErrorMessage = true
      }
    })

    if(valid){
      this.redirectAccountPage();
    };

  };

  redirectAccountPage() {
    console.log("redirected!")
    this.router.navigateByUrl('/account')
  };

}
