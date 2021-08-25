import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentClass } from '../assignment-class';

@Component({
  selector: 'app-assignment-listing',
  templateUrl: './assignment-listing.component.html',
  styleUrls: ['./assignment-listing.component.css']
})
export class AssignmentListingComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  assignment: AssignmentClass[];
  semester:string;
  degree:string;
  subject:string;
  test:any;
  constructor(private http:HttpClient, private toastr:ToastrService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getData();
    this.spinner.hide();
  }

  getData(){

    this.http.get<any>(this.rootUrl+'api/getAssignment').subscribe(
      Response=>{
        this.assignment=Response;
      // if(this.status == "Pending"){
      //   this.assignment=this.assignment.filter(res=>{
          
      //     return res.status=='Pending';
      //   });
      //  }
       
       
      }
    );
  }

  deleteEmployee(data:any){
this.spinner.show();
    this.http.delete(this.rootUrl+'api/assignments/'+data).subscribe(
      () =>{
        this.toastr.success('Deleted Successfully');
        this.ngOnInit();
      }
    )
    this.spinner.hide();
      }
      Search(){
        if(this.subject != ""){
          this.assignment=this.assignment.filter(res=>{
            return res.subject.toLocaleLowerCase().match(this.subject.toLocaleLowerCase());
                });
        } else if(this.subject ==""){
          this.ngOnInit()
        }
       
      }
}
