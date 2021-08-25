import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-unirejected',
  templateUrl: './unirejected.component.html',
  styleUrls: ['./unirejected.component.css']
})
export class UnirejectedComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  users: User[];
 
  First_Name:string;
  modalRef: BsModalRef;
  status='Rejected';
  constructor(private http: HttpClient,private toastr: ToastrService) { }  
  

  ngOnInit(): void {
    this.getadmissionform();
    
  }
  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/admission_form').subscribe(
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

this.http.delete(this.rootUrl+'api/admission_form/'+data).subscribe(
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
