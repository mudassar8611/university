import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentClass } from '../assignment-class';
import { UploadResultClass } from '../upload-result-class';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  
  resultclass: UploadResultClass[];
  semester:string;
  degree:string;
  subject:string;
  result:any;
  constructor(private http:HttpClient, private toastr:ToastrService, private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getData();
    this.spinner.hide();
  }

  getData(){
    this.http.get<any>(this.rootUrl+'api/getResult').subscribe(
      Response=>{
        this.resultclass=Response;
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
    this.http.delete(this.rootUrl+'api/uploadResults/'+data).subscribe(
      () =>{
        this.toastr.success('Deleted Successfully');
        this.ngOnInit();
      }
    )
    this.spinner.hide();
      }
      Search(){
        if(this.subject != ""){
          this.resultclass=this.resultclass.filter(res=>{
            return res.subject.toLocaleLowerCase().match(this.subject.toLocaleLowerCase());
                });
        } else if(this.subject ==""){
          this.ngOnInit()
        }
       
      }

}
