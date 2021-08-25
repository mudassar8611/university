import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TeacherServiceService } from '../teacher-service.service';

@Component({
  selector: 'app-upload-result',
  templateUrl: './upload-result.component.html',
  styleUrls: ['./upload-result.component.css']
})
export class UploadResultComponent implements OnInit {

  readonly rootUrl = 'http://localhost:64848/';
  uploadresult: FormGroup;
 
  semester:string;
  degree:string;
  subject:string;
  result:any;
 
  

  constructor(private fb:FormBuilder, private toastr:ToastrService, private service:TeacherServiceService, private spinner:NgxSpinnerService) { 
    this.uploadresult =this.fb.group({
      semester:["",[Validators.required]],
      degree:["",[Validators.required]],
      subject:[null,[Validators.required]],
      result:[null,Validators.required]
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
      formData.append('semester',this.uploadresult.value.semester);
      formData.append('degree',this.uploadresult.value.degree);
      formData.append('monthly',this.uploadresult.value.monthly);
      formData.append('subject',this.uploadresult.value.subject);
      // formData.append('result',this.uploadresult.value.result);
      formData.append('result',this.filetoUpload,this.filetoUpload.name);
      this.service.PostResult(formData).subscribe(
      (data) =>{
  

      this.toastr.success('Submitted Successfully');
      
     this.uploadresult.reset();
        
        }
       
      );
      this.spinner.hide();
    }
}
