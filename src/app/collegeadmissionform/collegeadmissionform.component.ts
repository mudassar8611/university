import { Component, OnInit } from '@angular/core';
import { College } from '../college.model';
import { NgForm } from '@angular/forms';
import { CollegeserviceService } from '../collegeservice.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-collegeadmissionform',
  templateUrl: './collegeadmissionform.component.html',
  styleUrls: ['./collegeadmissionform.component.css']
})
export class CollegeadmissionformComponent implements OnInit {
  user: College;
  constructor(private spinner:NgxSpinnerService,private userService: CollegeserviceService, private toastr: ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();
    this.resetForm();
    this.spinner.hide();
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
      Programs: '',
      Matric_Marks: '',
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
          this.spinner.hide();
        
      });
     
    }

}
