import { Component, OnInit } from '@angular/core';
import { Msg } from '../msg.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
msg:Msg;
userRegistrationForm: FormGroup;
name:string;
email:string;
message1:string;
  constructor(private fb:FormBuilder,private spinner:NgxSpinnerService,private userService: MessageService, private toastr: ToastrService,private route:ActivatedRoute) {
    this.userRegistrationForm =this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      message1:[null,[Validators.required]],
     status:['new',[Validators.required]]
    });
   }

  ngOnInit(): void {
   
  }
  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.reset();
  //   this.msg = {
      
  //     id:0,
  //     name: '',
  //     email: '',
  //     message1: '',
  //     status:'',
      
  //   }
  // }

  OnSubmit() {
    this.spinner.show();
//     var data = this.form.value;
//     return this.service.postmsg(data).subscribe(
//       (result) =>{
// this.toaster.success("Submit Successfully");
// this.form.reset();


var data = this.userRegistrationForm.value;
    this.userService.postmsg(data)
      .subscribe((result) => {
        console.log(result);
         this.toastr.success('Message Send successful');
          this.userRegistrationForm.reset();
        this.spinner.hide();
      });
  }

}
