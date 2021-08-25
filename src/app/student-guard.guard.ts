import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentGuardGuard implements CanActivate {
  constructor(private routes:Router){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      if (localStorage.getItem('student')!=null){
        return true;
      }
      else
      {
        this.routes.navigate(['/student_login']);
        return false;
      }
    }
  }
  

