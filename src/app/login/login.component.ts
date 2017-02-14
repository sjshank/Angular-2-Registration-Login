import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pTitle: string = 'Login';
  loginForm: FormGroup;
  model: any = {};

  constructor(private _loginService: LoginService, private _fb: FormBuilder,
    private _router: Router, private _route: ActivatedRoute) {

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
          this._router.navigate(['/home'])
        },
        error => {
          console.log(error)
        }
        )
    }
  }

  private _doLogout() {
    localStorage.removeItem('loggedUser');
  }

}
