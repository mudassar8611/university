import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentClass } from 'src/app/teacher-panel/assignment-class';
import { TeacherServiceService } from 'src/app/teacher-panel/teacher-service.service';
import { UploadResultClass } from 'src/app/teacher-panel/upload-result-class';

@Component({
  selector: 'app-student-filter-result',
  templateUrl: './student-filter-result.component.html',
  styleUrls: ['./student-filter-result.component.css']
})
export class StudentFilterResultComponent implements OnInit {

  assignment : UploadResultClass[];
  degree:any;
  semester: any;
  readonly rootUrl = 'http://localhost:64848/';
  constructor(private service:TeacherServiceService, private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
  }
  search(){
    this.spinner.show();
    this.service.getResult().subscribe(
          data=>{ 
    this.assignment = data;
    this.assignment=this.assignment.filter(res=>{
    return res.degree==this.degree && res.semester==this.semester;
    })
    });
    this.spinner.hide();
    }

    // deleteEmployee(data:any){

    //   this.http.delete(this.rootUrl+''+data).subscribe(
    //     () =>{
    //       this.toastr.success('Deleted Successfully');
    //       this.ngOnInit();
    //     }
    //   )
    //     }

}
