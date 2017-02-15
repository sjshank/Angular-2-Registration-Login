import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';
import { IUser } from '../models/user';
import { IRepo } from '../models/repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: IUser;
  isLogged: boolean = false;
  repos: IRepo;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    if (localStorage.getItem('loggedUser')) {
      this.isLogged = true;
      this.user = JSON.parse(localStorage.getItem('loggedUser'));
    }
  }

  getRepos() {
    this._homeService.getRepos(this.user.repos_url)
      .subscribe(
      data => this.repos = data,
      error => {
        console.log(error)
      }
      )
  }

}
