import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from'../services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pTitle : string = 'Login';
  loginForm: FormGroup;
  model : any = {};
  
  constructor(private _loginService : LoginService, private _fb: FormBuilder,
              private _router : Router, private _route: ActivatedRoute) {
    this.loginForm = this._fb.group({
      'userName':['', Validators.pattern('/^[a-z0-9]+$/i')],
      'password':['', Validators.pattern('/^[a-z0-9]+$/i')]
    })
   }

  doLogin(){
    console.log("Login form", this.loginForm);
    if(this.loginForm.dirty && this.loginForm.valid){
      this._loginService.doLogin(this.model)
          .subscribe(
            data => {
              console.log("success login");
              this._router.navigate(['/home'])
            },
            error => {
              console.log(error)
            }
          )
    }
  }

}
