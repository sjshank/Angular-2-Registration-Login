import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';
import { StorageService } from '../services/storage.service';
import { ErrorService } from '../services/error.service';
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

  constructor(private _homeService: HomeService, private _storageService: StorageService,
              private _errorService: ErrorService) { }

  ngOnInit() {
    if (this._storageService.getStorage('loggedUser')) {
      this.isLogged = true;
      this.user = this._storageService.getStorage('loggedUser');
    }
  }

  getRepos() {
    this._homeService.getRepos(this.user.repos_url)
      .subscribe(
      data => this.repos = data,
      error => {
        this._errorService.error(error);
        console.log(error)
      }
      )
  }

}
