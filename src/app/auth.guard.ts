
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private routes:Router){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):boolean{
      if (localStorage.getItem('Admin')!=null){
        return true;
      }
      else
      {
        this.routes.navigate(['/admin_login']);
        return false;
      }
    }
}

