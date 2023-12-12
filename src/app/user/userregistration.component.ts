import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class SignupComponent {

  userData = {
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role : ''
    
  };
signupObj: any;
onSignUp: any;

  constructor(private router: Router, private userService: UserDataService) { }

  // gotoLogin() {
  //   this.router.navigate(['auth/signin'])
  // }
  singupuser(userData: any) {
    this.userService.signupusers(userData).subscribe(
      response => {
        console.log('signup successfull', response);
        this.router.navigate(['auth/signin']);

      },
      error => {
        console.log('signup failed', error);
      }
    )

  }

}