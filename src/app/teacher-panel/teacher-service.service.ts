import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  readonly rootUrl = 'http://localhost:64848/';

  constructor(private http: HttpClient) { }

  // getdata(formData){
        
  //   return this.http.get(this.rootUrl+'',formData);
  //   }
  getdata():Observable<any>{
    return this.http.get(this.rootUrl+'api/getAssignment');
 }
  getResult():Observable<any>{
    return this.http.get(this.rootUrl+'api/getResult');
 }


  PostResult(formData){
        
    return this.http.post(this.rootUrl+'api/postResult',formData);
    }


        Postassignment(formData){
        
          return this.http.post(this.rootUrl+'api/postAssignment',formData);
          }
}
