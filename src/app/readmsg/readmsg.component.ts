import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msg } from '../msg.model';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-readmsg',
  templateUrl: './readmsg.component.html',
  styleUrls: ['./readmsg.component.css']
})
export class ReadmsgComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64848/';
  users: Msg[];
 
  name:string;
  modalRef: BsModalRef;
  status='read';
  edituser: FormGroup;
  constructor(private http: HttpClient,private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.getadmissionform();
    
  }
  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/messages').subscribe(
      Response=>{
        this.users=Response;
      if(this.status == "read"){
        this.users=this.users.filter(res=>{
          
          return res.status=='read';
        });
       }
       
       
      }
    );
  }
  deleteEmployee(data:any){

this.http.delete(this.rootUrl+'api/messages/'+data).subscribe(
  () =>{
    this.toastr.success('User Message Delete');
    this.ngOnInit();
  }
)
  }
  Search(){
    if(this.name != ""){
      this.users=this.users.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
            });
    } else if(this.name ==""){
      this.ngOnInit()
    }
   
  }

}
