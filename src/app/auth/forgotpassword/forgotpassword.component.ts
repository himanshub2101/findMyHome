import { Component, OnInit} from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{

  email : string = ''

  constructor(private auth : UserDataService ) { }

  ngOnInit(): void {

  }

  // forgotPassword(){ 
  // this.auth.forgotPassword(this.email);
  // this.email = '';
  // }

}
