import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Msg } from './msg.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  readonly rootUrl = 'http://localhost:64848/';
  constructor(private http: HttpClient) { }
  // registerUser(msg : Msg){
  
  //   let body: Msg = {
  //     id:msg.id,
    
  //   name: msg.name,
  //   email: msg.email,
  //   message1: msg.message1,
  //   status:'unread'
   
  //   }
  
  //   return this.http.post(this.rootUrl + 'api/messages', body);
  
  // }


  // registerUser(formdata: Msg){
  //   let body:Msg={
  //     id:formdata.id,
  //     name:formdata.name,
  //     email:formdata.email,
  //     message1:formdata.message1,
     
  //     status:'new'
  //   }
  //   return this.http.post(this.rootUrl+'api/messages', body);
  // }
  postmsg(data){
   
    return this.http.post(this.rootUrl+'api/messages',data);
    }


  getcurrentdata(id){
    return  this.http.get(this.rootUrl+'api/messages/'+id)
   }
}
