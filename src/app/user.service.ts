import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
@Injectable()
export class UserService {
  getemp() {
    throw new Error('Method not implemented.');
  }
 
  readonly rootUrl = 'http://localhost:64848/';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
  
    let body: User = {
    Student_id:user.Student_id,
    
      First_Name: user.First_Name,
      Last_Name: user.Last_Name,
      Email: user.Email,
      Guardian_Name: user.Guardian_Name,
      Guardian_Occupation: user.Guardian_Occupation,
      Student_Number: user.Student_Number,
      Guardian_Number: user.Guardian_Number,
      BS_Programs: user.BS_Programs,
      Gender:user.Gender,
      Matric_Marks: user.Matric_Marks,
      Intermediate_Marks: user.Intermediate_Marks,
      Cnic:user.Cnic,
      Date_of_Birth: user.Date_of_Birth,
      Nationality: user.Nationality,
      Address: user.Address,
      status:'Pending'

    }
  
    return this.http.post(this.rootUrl + 'api/admission_form', body);
  
  }

getcurrentdata(id){
 return  this.http.get(this.rootUrl+'api/admission_form/'+id)
}



update(id,data){

  return  this.http.put(this.rootUrl+'api/admission_form/'+id,data)
}


 

}