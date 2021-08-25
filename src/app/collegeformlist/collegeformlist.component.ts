import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { College } from '../college.model';
import { CollegeserviceService } from '../collegeservice.service';
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-collegeformlist',
  templateUrl: './collegeformlist.component.html',
  styleUrls: ['./collegeformlist.component.css']
})
export class CollegeformlistComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  users: College[];
  First_Name:string;
  edituser: FormGroup;
  status='Pending';
  constructor(private http: HttpClient,private toastr: ToastrService, private userService: CollegeserviceService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.getadmissionform();
  }

  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/collegeadmission_form').subscribe(
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

      changestatus(data:any){
    
        this.edituser =this.fb.group({
          status:[null,[Validators.required]]
        })
        this.userService.getcurrentdata(data).subscribe((result:any)=>{
            
          this.edituser.get('status').patchValue(result.status="Approved");
         console.log(result);
         this.http.put(this.rootUrl+'api/collegeadmission_form/'+data,result).subscribe(
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
       this.http.put(this.rootUrl+'api/collegeadmission_form/'+data,result).subscribe(
        () =>{
          this.toastr.success('Form Rejected');
          this.ngOnInit();
        }
      )
    })
    
    }

}
