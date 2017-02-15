import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from '../models/user';
import { APPCONSTANT } from '../config/app.config'

@Injectable()
export class LoginService {

    constructor(private _http: Http){}

    doLogin(model : any){
        if(!model.username && model.username === 'undefined'){
            Observable.throw("User not found");
            return;
        }
        return this._http.get(APPCONSTANT.githubUrl + model.username)
                    .map((response: Response) => {
                        let user : IUser = response.json();
                        if(user.message === 'Not Found'){
                            Observable.throw("Unauthorized");
                        }else{
                            localStorage.setItem('loggedUser', JSON.stringify(user));
                        }
                    })
                    .catch(this._handleError);
    }

    private _handleError(error: Response){
        return Observable.throw(APPCONSTANT.serviceErr);
    }
}