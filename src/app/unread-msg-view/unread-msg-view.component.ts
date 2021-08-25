import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msg } from '../msg.model';
import {ActivatedRoute} from '@angular/router'
import { MessageService } from '../message.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-unread-msg-view',
  templateUrl: './unread-msg-view.component.html',
  styleUrls: ['./unread-msg-view.component.css']
})
export class UnreadMsgViewComponent implements OnInit {
  readonly rootUrl = 'http://localhost:64731/';
  user: Msg;
  edituser: FormGroup;
  form:FormGroup;
  constructor(private http: HttpClient,private fb:FormBuilder, private userservice:MessageService, private router:ActivatedRoute) { this.edituser =this.fb.group({
    id:[null,[Validators.required]],
    name:[null,[Validators.required]],
    email:[null,[Validators.required]],
    message1:[null,[Validators.required]],
   
   })
   this.userservice.getcurrentdata(this.router.snapshot.params.id).subscribe((result)=>{
    console.log(result)
    this.edituser.get('id').setValue(result['id']);
    this.edituser.get('name').setValue(result['name']);
    this.edituser.get('email').setValue(result['email']);
    this.edituser.get('message1').setValue(result['message1']);
    
  })
}

  ngOnInit(): void {
  }

}
