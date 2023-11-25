import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { AuthModule } from './auth/auth.module';
import { UserRegistrationComponent } from './user/userregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
