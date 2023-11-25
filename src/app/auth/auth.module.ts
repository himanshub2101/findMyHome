import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
