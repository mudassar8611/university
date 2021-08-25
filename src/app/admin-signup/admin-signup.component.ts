import { Component, Input, OnInit } from '@angular/core';
import { AdminSignup } from '../admin-signup.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminSignupService } from '../admin-signup.service';
import { ToastrService } from 'ngx-toastr'
import {ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  //#region Variable
  register: FormGroup;
  submitted = false;
  check = false;
  @Input() recieveData: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private SpinnerService: NgxSpinnerService,
  ) {



   
  }

  ngOnInit(): void {
 
    this.register = this.fb.group({
      // id: Number,
      FullName: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.pattern('[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      ConfirmPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
      Phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      // Validators.pattern('[0-9]{11}'),
      City: [null, [Validators.required]],
      Country: [null, [Validators.required]],
      RoleId: ['admin', [Validators.required]],
      RegistrationNo: [null, [Validators.required]],
      PostalCode: [null, [Validators.required, Validators.pattern('^[#.0-9a-zA-Z\s,-]+$')]],
    
    })
  



  }

  // get errorCtr() {
  //   return this.register.controls;
  // }

  // Rolename = JSON.parse(localStorage.getItem('userdata')).Rolename;


  // getData(){
  //   if (this.recieveData != null) {
  //     this.check = true;
  //     this.register.patchValue({
  //       id: this.recieveData.id,
  //       name: this.recieveData.name,
  //       email: this.recieveData.email,
  //       phone: this.recieveData.phone,
  //       mobile: this.recieveData.mobile,
  //       cnic: this.recieveData.cnic,
  //       address: this.recieveData.address,
  //       city: this.recieveData.city,
  //       country: this.recieveData.country,
  //       zipCode: this.recieveData.zipCode,
  //       Roleid: this.recieveData.RoleId
  //     })

  //   }
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   if (!this.register.valid) {
  //     return false
  //   }
  //   else {

  //     let user = this.register.value;
  //     this.userregister(user, this.Rolename);
  //   }
  // }

  // userregister(user, Rolename) {
  //   this.SpinnerService.show();
  //   if (this.register.value.confirmPassword == this.register.value.password) {
  //     let data = { ...user, "Rolename": Rolename }
  //     this.loginservice.userregister(data).subscribe((result: any) => {
        
  //       if (result.status) {
  //         this.toastr.success(JSON.stringify(result.message));
  //         this.SpinnerService.hide();
  //       }
  //       else {
  //         this.indicator.erroralert(result.message);
  //         this.SpinnerService.hide()
  //       }

  //     }, (err) => {
  //       this.SpinnerService.hide()
  //       this.indicator.erroralert('Something went wrong');
  //     })
  //   }
  //   else {
  //     this.SpinnerService.hide()
  //     this.toastr.error("password and confirm password is not match")
      
  //   }
  // }

  // update() {
  //   this.SpinnerService.show();
  //   let user = this.register.value;
  //   let data = { ...user, "Rolename": this.Rolename }
  //   this.loginservice.userupdate(data).subscribe(
  //     (result: any) => {
       
  //       if (result.status) {
  //         this.toastr.success(result.message);
  //         this.SpinnerService.hide();
  //       }
  //       else {
  //         this.indicator.erroralert(result.message);
  //         this.SpinnerService.hide()
  //       }

  //     }, (err) => {
  //       this.SpinnerService.hide()
  //       this.indicator.erroralert('Something went wrong');
  //     }
  //   )
  // }

  //#endregion

















  // user: AdminSignup;


 // constructor(private userService: AdminSignupService, private toastr: ToastrService,private route:ActivatedRoute) { }

  // ngOnInit(): void {
    
  // }

  //  resetForm(form?: NgForm) {
  //   if (form != null)
  //      form.reset();
  //   this.user = {
      
  //      id:0,
  //     name: '',
  //     password: ''
      
      
  //   }
  // }

  // OnSubmit(form: NgForm) {
    
    
  //   this.userService.registerUser(form.value)
  //     .subscribe((result) => {
        
  //        this.toastr.success('SignUp successful');
  //         this.resetForm(form);
        
        
  //     });
  // }

}
