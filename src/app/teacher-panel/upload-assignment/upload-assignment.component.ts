import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-upload-assignment',
  templateUrl: './upload-assignment.component.html',
  styleUrls: ['./upload-assignment.component.css']
})
export class UploadAssignmentComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  uploadassignment: FormGroup;
 
  semester:string;
  degree:string;
  subject:string;
  test:any;
 
  

  constructor(private spinner:NgxSpinnerService,private fb:FormBuilder, private toastr:ToastrService, private service:TeacherServiceService) { 
    this.uploadassignment =this.fb.group({
      semester:["",[Validators.required]],
      degree:["",[Validators.required]],
      subject:[null,[Validators.required]],
      test:[null,Validators.required]
    });
  }
  filetoUpload:File=null;
  
  handleImagetoInput(file:FileList){
    this.filetoUpload=file.item(0);
  }
  ngOnInit(): void {
  }

  OnSubmit(){
    this.spinner.show();
      const formData:FormData=new FormData();
      formData.append('semester',this.uploadassignment.value.semester);
      formData.append('degree',this.uploadassignment.value.degree);
      formData.append('monthly',this.uploadassignment.value.monthly);
      formData.append('subject',this.uploadassignment.value.subject);
      // formData.append('test',this.uploadassignment.value.test);
      formData.append('test',this.filetoUpload,this.filetoUpload.name);
      this.service.Postassignment(formData).subscribe(
      (data) =>{
  
      this.toastr.success('Submitted Successfully');
      
     this.uploadassignment.reset();
        
        }
       
      );
      this.spinner.hide();
    }
}
