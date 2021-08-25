import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
import { SignupService } from '../signup.service';
import { StudentLogin } from '../student-login.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  loginForm:FormGroup;
  message: string;
  Error=false;

  constructor(private userService: SignupService,private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      registration: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  onSubmit(){
    let login = this.loginForm.value;
    this.login(login);
  }
  login( studentlogin: StudentLogin){
this.userService.login(studentlogin).subscribe(
  (result: any) =>{
  var succ = result;
  if(succ){
    
    this.loginForm.reset();
    localStorage.setItem("student",JSON.stringify(succ));
    this.router.navigate(['/panel']);
  }
  else{
    this.Error = true;
    this.message ="User ID/Password Wrong";
  }

})
  }

}
