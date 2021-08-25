import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from './signup.model';
import {StudentLogin} from './student-login.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  readonly rootUrl = 'http://localhost:64848/';

  constructor(private http: HttpClient) { }
  registerUser(college : Signup){
  
    let body: Signup = {
    id:college.id,
    
      username: college.username,
      password: college.password,
      registration:college.registration,
      email:college.email
      
      

    }
  
    return this.http.post(this.rootUrl + 'api/logins', body);
  
  }
  login(studentlogin:StudentLogin){
    return this.http.post(this.rootUrl + 'api/student_logins',studentlogin);
  }

  getcurrentdata(id){
    return  this.http.get(this.rootUrl+'api/logins/'+id)
   }

  update(id,data){

    return  this.http.put(this.rootUrl+'api/logins/'+id,data)
  }
}
