import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';
import { ErrorService } from '../services/error.service';
import { StorageService } from '../services/storage.service';
import { MessageService } from '../services/message.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pTitle: string = 'Login';
  loginForm: FormGroup;
  model: any = {};

  constructor(private _loginService: LoginService, private _fb: FormBuilder,
    private _router: Router, private _route: ActivatedRoute,
    private _errorService: ErrorService, private _storageService: StorageService,
    private _messageService: MessageService) {

  }

  ngOnInit() {

    this._doLogout();

    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._loginService.doLogin(this.loginForm.value)
        .subscribe(
        data => {
          this._messageService.sendMessage(false);
          this._router.navigate(['/home'])
        },
        error => {
          this._errorService.error(error);
          console.log(error)
        }
        )
    }
  }

  private _doLogout() {
    this._storageService.clearStorage('loggedUser');
    this._messageService.sendMessage(true);
  }

}
