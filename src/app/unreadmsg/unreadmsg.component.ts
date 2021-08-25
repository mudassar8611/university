import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msg } from '../msg.model';
import { MessageService } from '../message.service';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unreadmsg',
  templateUrl: './unreadmsg.component.html',
  styleUrls: ['./unreadmsg.component.css']
})
export class UnreadmsgComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64731/';
  users: Msg[];
 
  name:string;
  modalRef: BsModalRef;
  status='unread';
  edituser: FormGroup;
  constructor(private http: HttpClient,private userService: MessageService,private toastr: ToastrService,private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.getadmissionform();
    
  }
  getadmissionform(){
    this.http.get<any>(this.rootUrl+'api/messages').subscribe(
      Response=>{
        this.users=Response;
      if(this.status == "unread"){
        this.users=this.users.filter(res=>{
          
          return res.status=='unread';
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

  changestatus(data:any){
    
    this.edituser =this.fb.group({
      status:[null,[Validators.required]]
    })
    this.userService.getcurrentdata(data).subscribe((result:any)=>{
        
      this.edituser.get('status').patchValue(result.status="read");
     console.log(result);
     this.http.put(this.rootUrl+'api/messages/'+data,result).subscribe(
      () =>{
        
        this.ngOnInit();
      }
    )
  })
 

}



}
