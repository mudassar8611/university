import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { College } from './college.model';

@Injectable({
  providedIn: 'root'
})
export class CollegeserviceService {
  readonly rootUrl = 'http://localhost:64848/';

  constructor(private http: HttpClient) { }
  registerUser(college : College){
  
    let body: College = {
    Student_id:college.Student_id,
    
      First_Name: college.First_Name,
      Last_Name: college.Last_Name,
      Email: college.Email,
      Guardian_Name: college.Guardian_Name,
      Guardian_Occupation: college.Guardian_Occupation,
      Student_Number: college.Student_Number,
      Guardian_Number: college.Guardian_Number,
      Programs: college.Programs,
      Gender:college.Gender,
      Matric_Marks: college.Matric_Marks,
     
      Cnic:college.Cnic,
      Date_of_Birth: college.Date_of_Birth,
      Nationality: college.Nationality,
      Address: college.Address,
      status:'Pending'
      

    }
  
    return this.http.post(this.rootUrl + 'api/collegeadmisstions', body);
  
  }

  getcurrentdata(id){
    return  this.http.get(this.rootUrl+'api/collegeadmisstions/'+id)
   }

   update(id,data){

    return  this.http.put(this.rootUrl+'api/collegeadmisstions/'+id,data)
  }
}
