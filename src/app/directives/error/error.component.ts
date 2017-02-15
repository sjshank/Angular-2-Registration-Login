import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {
    error: any = {};

    constructor(private _errorService: ErrorService){}

    ngOnInit(){
       this._errorService.getMessage().subscribe(error => {
           this.error = error;
       })
    }

}