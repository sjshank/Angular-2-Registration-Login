import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AppGuardService implements CanActivate {

    constructor(private router: Router){}

    canActivate(){
        if(localStorage.getItem('loggedUser')){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}