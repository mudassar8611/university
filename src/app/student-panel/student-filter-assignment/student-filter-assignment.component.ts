import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentClass } from 'src/app/teacher-panel/assignment-class';
import { TeacherServiceService } from 'src/app/teacher-panel/teacher-service.service';

@Component({
  selector: 'app-student-filter-assignment',
  templateUrl: './student-filter-assignment.component.html',
  styleUrls: ['./student-filter-assignment.component.css']
})
export class StudentFilterAssignmentComponent implements OnInit {
  assignment : AssignmentClass[];
  degree:any;
  semester: any;
  readonly rootUrl = 'http://localhost:64848/';
  constructor(private service:TeacherServiceService, private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  search(){
    this.service.getdata().subscribe(
          data=>{ 
    this.assignment = data;
    this.assignment=this.assignment.filter(res=>{
    return res.degree==this.degree && res.semester==this.semester;
    })
    });
    }

//     deleteEmployee(data:any){
// this.spinner.show();
//       this.http.delete(this.rootUrl+''+data).subscribe(
//         () =>{
//           this.toastr.success('Deleted Successfully');
//           this.ngOnInit();
//         }
//       )
//       this.spinner.hide();
//         }

  // search(){
  //   this.service.getdata().subscribe(
  //         data=>{ 
  //    this.assignment = data;
  //   this.assignment=this.assignment.filter(res=>{
  //   return res.subject==this.subject && res.semester==this.semester;
  //   })
  //   });
  //   }

}
