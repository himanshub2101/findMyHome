import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  loginusers(data: any) {
    throw new Error('Method not implemented.');
  }
private  API_URL = "http://localhost:3001"

  constructor(private http : HttpClient) { }


 signupusers(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/user/register`, userData)
  }

}