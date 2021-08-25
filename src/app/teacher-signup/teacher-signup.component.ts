import { Component, OnInit } from '@angular/core';
import { AdminSignup } from '../admin-signup.model';
import { NgForm } from '@angular/forms';
import { TeacherSignupService } from '../teacher-signup.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.css']
})
export class TeacherSignupComponent implements OnInit {
  user: AdminSignup;

  constructor(private userService: TeacherSignupService, private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      
      id:0,
      name: '',
      password: ''
      
      
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
