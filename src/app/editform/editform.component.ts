import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {ActivatedRoute} from '@angular/router'
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  user: User;
  edituser: FormGroup;
  form:FormGroup;
  constructor(private fb:FormBuilder,private toastr: ToastrService, private userservice:UserService, private router:ActivatedRoute) { 
      this.edituser =this.fb.group({
        Student_id:[null,[Validators.required]],
        First_Name:[null,[Validators.required]],
        Last_Name:[null,[Validators.required]],
        Guardian_Name:[null,[Validators.required]],
        Guardian_Occupation:[null,[Validators.required]],
        Student_Number:[null,[Validators.required]],
        Guardian_Number:[null,[Validators.required]],
        BS_Programs:[null,[Validators.required]],
        Gender:[null,[Validators.required]],
        Matric_Marks:[null,[Validators.required]],
        Intermediate_Marks:[null,[Validators.required]],
        Email:[null,[Validators.required]],
        Cnic:[null,[Validators.required]],
        Date_of_Birth:[null,[Validators.required]],
        Nationality:[null,[Validators.required]],
        Address:[null,[Validators.required]],
        status:[null,[Validators.required]]
       })
       this.userservice.getcurrentdata(this.router.snapshot.params.id).subscribe((result)=>{
        
        this.edituser.get('Student_id').setValue(result['Student_id']);
        this.edituser.get('First_Name').setValue(result['First_Name']);
        this.edituser.get('Last_Name').setValue(result['Last_Name']);
        this.edituser.get('Guardian_Name').setValue(result['Guardian_Name']);
        this.edituser.get('Guardian_Occupation').setValue(result['Guardian_Occupation']);
        this.edituser.get('Student_Number').setValue(result['Student_Number']);
        this.edituser.get('Guardian_Number').setValue(result['Guardian_Number']);
        this.edituser.get('BS_Programs').setValue(result['BS_Programs']);
        this.edituser.get('Gender').setValue(result['Gender']);
        this.edituser.get('Matric_Marks').setValue(result['Matric_Marks']);
        this.edituser.get('Intermediate_Marks').setValue(result['Intermediate_Marks']);
        this.edituser.get('Email').setValue(result['Email']);
        this.edituser.get('Cnic').setValue(result['Cnic']);
        this.edituser.get('Date_of_Birth').setValue(result['Date_of_Birth']);
        this.edituser.get('Nationality').setValue(result['Nationality']);
        this.edituser.get('Address').setValue(result['Address']);
        this.edituser.get('status').setValue(result['status']);
      })
  }  

  ngOnInit(): void {
    
   
  }
  updateuser(){
   
this.userservice.update(this.router.snapshot.params.id,this.edituser.value).subscribe(()=> 
 this.toastr.success('User Updated')


 )}
 

}
