import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminSignup } from './admin-signup.model';
import {AdminLogin} from './admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherSignupService {
  readonly rootUrl = 'http://localhost:64848/';

  constructor(private http: HttpClient) { }
  registerUser(college : AdminSignup){
  
    let body: AdminSignup = {
    id:college.id,
    
      name: college.name,
      password: college.password,
      
      
      

    }
  
    return this.http.post(this.rootUrl + 'api/teacher_signup', body);
  
  }

  login(studentlogin:AdminLogin){
    return this.http.post(this.rootUrl + 'api/teacher_login',studentlogin);
  }

}
