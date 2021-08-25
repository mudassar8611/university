import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../signup.model';
import {ActivatedRoute} from '@angular/router'
import { SignupService } from '../signup.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-student-password-change',
  templateUrl: './student-password-change.component.html',
  styleUrls: ['./student-password-change.component.css']
})
export class StudentPasswordChangeComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64731/';
  user: Signup;
  edituser: FormGroup;
  form:FormGroup;
  constructor(private http: HttpClient,private fb:FormBuilder,private toastr: ToastrService, private userservice:SignupService, private router:ActivatedRoute) { 
    this.edituser =this.fb.group({
      password:[null,[Validators.required]],
      id:[null,[Validators.required]],
      username:[null,[Validators.required]],
      registration:[null,[Validators.required]],
      email:[null,[Validators.required]],
      
     })
     this.userservice.getcurrentdata(this.router.snapshot.params.id).subscribe((result)=>{
     
      this.edituser.get('id').setValue(result['id']);
      this.edituser.get('username').setValue(result['username']);
      this.edituser.get('registration').setValue(result['registration']);
      this.edituser.get('email').setValue(result['email']);
     
      
     
    })
  }

  ngOnInit(): void {
  }

  updateuser(){
    //const iduser=JSON.parse(localStorage.getItem("student"));
    this.userservice.update(this.router.snapshot.params.id,this.edituser.value).subscribe((result)=> 
     this.toastr.success('User Updated')
    
     )}

}
