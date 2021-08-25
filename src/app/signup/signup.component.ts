import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup.model';
import { NgForm } from '@angular/forms';
import { SignupService } from '../signup.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: Signup;
  
  
  constructor(private userService: SignupService, private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      
      id:0,
      username: '',
      password: '',
      registration:'',
      email:''
      
    }
  }

  OnSubmit(form: NgForm) {
    
    
    this.userService.registerUser(form.value)
      .subscribe((result) => {
        
         this.toastr.success('SignUp successful');
          this.resetForm(form);
        
        
      });
  }

}
