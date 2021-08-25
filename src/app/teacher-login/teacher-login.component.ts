import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
import { TeacherSignupService } from '../teacher-signup.service';
import { AdminLogin } from '../admin-login.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm:FormGroup;
  message: string;
  Error=false;
  constructor(private userService: TeacherSignupService,private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      name: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit(){
    let login = this.loginForm.value;
    this.login(login);
  }
  login( studentlogin: AdminLogin){
this.userService.login(studentlogin).subscribe(
  (result: any) =>{
  var succ = result;
  if(succ){
    this.loginForm.reset();
    localStorage.setItem("teacher",JSON.stringify(succ));
    this.router.navigate(['/teacher_panel']);
  }
  else{
    this.Error = true;
    this.message ="User ID/Password Wrong";
  }

})
  }

}
