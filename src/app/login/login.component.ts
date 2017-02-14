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
    this.loginForm = this._fb.group({
      username: ['', Validators.pattern('^[a-zA-Z0-9]+$')],
      password: ['', Validators.pattern('^[a-zA-Z0-9]+$')]
    });
  }

  doLogin() {
    console.log("Login form", this.loginForm);
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._loginService.doLogin(this.loginForm.value)
        .subscribe(
        data => {
          console.log("success login", data);
          localStorage.setItem('loggedUser', JSON.stringify(data));
          this._router.navigate(['/home'])
        },
        error => {
          console.log(error)
        }
        )
    }
  }

}
