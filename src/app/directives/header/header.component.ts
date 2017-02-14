import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isLogged: boolean = false;
    appName: string = 'Angular 2 - Registration/Login';
    
    ngOnInit() {
        if (localStorage.getItem('loggedUser')) {
            this.isLogged = true;
        }
    }
}