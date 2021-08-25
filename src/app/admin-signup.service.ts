import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSignup } from './admin-signup.model';
import {AdminLogin} from './admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupService {
  readonly rootUrl = 'http://localhost:64731/';

  constructor(private http: HttpClient) { }

  registerUser(college : AdminSignup){
  
    let body: AdminSignup = {
    id:college.id,
    
      name: college.name,
      password: college.password,
      
      
      

    }
  
    return this.http.post(this.rootUrl + 'api/admin_signup', body);
  
  }
  
  login(studentlogin:AdminLogin){
    return this.http.post(this.rootUrl+'',studentlogin);
  }
}
