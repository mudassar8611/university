import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
import { AdminSignupService } from '../admin-signup.service';
import { AdminLogin } from '../admin-login.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm:FormGroup;
  message: string;
  Error=false;
  constructor(private userService: AdminSignupService,private formbuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      FullName: ['',[Validators.required]],
      Password: ['',[Validators.required]]
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
    localStorage.setItem("Admin",JSON.stringify(succ));
    this.router.navigate(['/dashboard']);
  }
  else{
    this.Error = true;
    this.message ="User ID/Password Wrong";
  }
})
  }

}
