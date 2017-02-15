import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {IRepo} from '../models/repo';

import { APPCONSTANT } from '../config/app.config';

@Injectable()
export class HomeService {

    constructor(private _http: Http) { }
    
    getRepos(githubRepoUrl: string) : Observable<IRepo> {
        return this._http.get(githubRepoUrl)
            .map((response: Response) => <IRepo[]> response.json())
            .catch(this._handleError);
    }

     private _handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().message || 'Server error');
    }
}