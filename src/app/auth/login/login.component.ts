import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']   
})

export class LoginComponent implements OnInit{

    signupusers: any[] = [];
    signinObj: any = {
    email: '',
    password: ''
};

  constructor() { }

  ngOnInit(): void {

  }
  onSignIn(){
    const userExit = this.signupusers.find(m => m.userName == this.signinObj.userName && m.password == this.signinObj.password)
    if(userExit){
      alert('User Login Successfully');
    }else {
      alert('wrong email or password')
    }

  }
}