import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { StorageService } from '../../services/storage.service';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isLogged: boolean = false;
    appName: string = 'Angular 2 - Registration-Login';
    subscription: Subscription;
    message: any;

    constructor(private _storageService: StorageService, private _messageService: MessageService){
        this.subscription = this._messageService.getMessage().subscribe(
            data => {
                this.message = data;
                if(this.message.text){
                    this._storageService.clearStorage('loggedUser');
                    this.isLogged = false;
                }else{
                    this.isLogged = true;
                }
                
            }
        )
    }
    
    ngOnInit() {
        if (this._storageService.getStorage('loggedUser')) {
            this.isLogged = true;
        }
    }
    
    ngOnDestroy() {
        this.isLogged = false;
        this.subscription.unsubscribe();
  }
}