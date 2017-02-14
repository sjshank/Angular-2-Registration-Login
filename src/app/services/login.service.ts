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
        return this._http.get(APPCONSTANT.githubUrl + model.username)
                    .map((response: Response) => <IUser[]> response.json())
                    .catch(this._handleError);
    }

    private _handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}