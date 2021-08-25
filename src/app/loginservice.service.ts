import { Injectable } from '@angular/core';

@Injectable()
export class LoginserviceService {

  constructor() { }
  checkusernameandpassword(uname:string, pwd:string)
  {
    if(uname=="admin" && pwd=="LcaStAdmiN000"){
      localStorage.setItem('username',"admin");
      return true;
    }
    else{
      return false;
    }
  }
}

