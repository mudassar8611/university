import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-universitylist',
  templateUrl: './universitylist.component.html',
  styleUrls: ['./universitylist.component.css']
})
export class UniversitylistComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  users: User[];
 
  First_Name:string;
  modalRef: BsModalRef;
  status='Pending';
  edituser: FormGroup;
  constructor(private http: HttpClient,private userService: UserService,private toastr: ToastrService,private fb:FormBuilder,) { }  
  

  ngOnInit(): void {
    this.getadmissionform();
    
  }
  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/admission_form').subscribe(
      Response=>{
        this.users=Response;
      if(this.status == "Pending"){
        this.users=this.users.filter(res=>{
          
          return res.status=='Pending';
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

  changestatus(data:any){
    
    this.edituser =this.fb.group({
      status:[null,[Validators.required]]
    })
    this.userService.getcurrentdata(data).subscribe((result:any)=>{
        
      this.edituser.get('status').patchValue(result.status="Approved");
     console.log(result);
     this.http.put(this.rootUrl+'api/admission_form/'+data,result).subscribe(
      () =>{
        this.toastr.success('Form Approved');
        this.ngOnInit();
      }
    )
  })
 

}

reject(data:any){
  this.edituser =this.fb.group({
    status:[null,[Validators.required]]
  })
  this.userService.getcurrentdata(data).subscribe((result:any)=>{
      
    this.edituser.get('status').patchValue(result.status="Rejected");
   console.log(result);
   this.http.put(this.rootUrl+'api/admission_form/'+data,result).subscribe(
    () =>{
      this.toastr.success('Form Rejected');
      this.ngOnInit();
    }
  )
})

}
  




}

