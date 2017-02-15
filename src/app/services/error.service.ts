import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService{
    private subject = new  Subject<any>();
    private navigationChangeFlag = false;

    constructor(private _router: Router){
        _router.events.subscribe(
            event => {
                if(event instanceof NavigationStart){
                    if(this.navigationChangeFlag){
                        this.navigationChangeFlag = false;
                    } else {
                        this.subject.next();
                    }
                }
            });
    }

    success(message: string, navigationChangeFlag = false){
        this.navigationChangeFlag = navigationChangeFlag;
        this.subject.next({type: 'success', msg: message})
    }

    error(message: string, navigationChangeFlag = false){
        this.navigationChangeFlag = navigationChangeFlag;
        this.subject.next({type: 'failure', msg: message})
    }

    getMessage(): Observable<any>{
        return this.subject.asObservable();
    }
}