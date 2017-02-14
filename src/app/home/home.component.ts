import { Component, OnInit } from '@angular/core';

import {IUser} from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : IUser;
  isLogged : boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('loggedUser')){
      this.isLogged = true;
      this.user = JSON.parse(localStorage.getItem('loggedUser'));
    }
  }

}
