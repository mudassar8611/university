import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { College } from '../college.model';
import { ToastrService } from 'ngx-toastr'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-collegerejected',
  templateUrl: './collegerejected.component.html',
  styleUrls: ['./collegerejected.component.css']
})
export class CollegerejectedComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  users: College[];
  First_Name:string;
  edituser: FormGroup;
  status='Rejected';
  constructor(private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getadmissionform();
  }

  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/collegeadmission_form').subscribe(
      Response=>{
      
        this.users=Response;
        if(this.status == "Rejected"){
          this.users=this.users.filter(res=>{
            
            return res.status=='Rejected';
          });
         }
      }
    );
  }

  deleteEmployee(data:any){

    this.http.delete(this.rootUrl+'api/collegeadmission_form/'+data).subscribe(
      () =>{
        this.toastr.success('User Record Delete');
        this.ngOnInit();
      }
    )
      }
      Search(){
        if(this.First_Name != ""){
          this.users=this.users.filter(res=>{
            return res.First_Name.toLocaleLowerCase().match(this.First_Name.toLocaleLowerCase());
                });
        } else if(this.First_Name ==""){
          this.ngOnInit()
        }
       
      }

     
    
   

}
