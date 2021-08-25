import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeacherGuardGuard implements CanActivate {
  constructor(private routes:Router){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      if (localStorage.getItem('teacher')!=null){
        return true;
      }
      else
      {
        this.routes.navigate(['/teacher_login']);
        return false;
      }
    }
  
}
