import { Component } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    appName: string = 'Angular 2 - Registration/Login';
}