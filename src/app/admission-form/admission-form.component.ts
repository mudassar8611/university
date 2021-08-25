import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';
import {  NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  user: User;
  constructor(private spinner:NgxSpinnerService,private userService: UserService, private toastr: ToastrService,private route:ActivatedRoute) { }


  ngOnInit(): void {
  
    this.resetForm();
  
  }
  


  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      Gender:'',
      Student_id:0,
      First_Name: '',
      Last_Name: '',
      Guardian_Name: '',
      Guardian_Occupation: '',
      Student_Number: '',
      Guardian_Number: '',
      BS_Programs: '',
      Matric_Marks: '',
      Intermediate_Marks: '',
      Email: '',
      Cnic: '',
      Date_of_Birth: '',
      Nationality: '',
      Address: '',
      status:''
    }
  }

  OnSubmit(form: NgForm) {
    
    this.spinner.show();
    this.userService.registerUser(form.value)
      .subscribe((result) => {
        
         this.toastr.success('User registration successful');
          this.resetForm(form);
        
        
      });
      this.spinner.hide();
  }

  



}
