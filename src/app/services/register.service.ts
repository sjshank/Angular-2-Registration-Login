import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


import { APPCONSTANT } from '../config/app.config'

@Injectable()
export class RegisterService {
    
    constructor(private _http: Http){}

    doRegister(data: any){
       return this._http.post(APPCONSTANT.registerUrl, data)
                .map((response: Response) => {
                    console.log(response);
                })
                .catch(this._handleError);
    }

    private _handleError(error: Response){
        return Observable.throw(APPCONSTANT.serviceErr);
    }
}