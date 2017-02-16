import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { RegisterService } from '../services/register.service';
import { ErrorService } from '../services/error.service';
import { StorageService } from '../services/storage.service';
import { MessageService } from '../services/message.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pTitle: string = 'Sign Up';
  registerForm: FormGroup;

  constructor(private _fb: FormBuilder, private _errorService : ErrorService,
              private _messageService: MessageService, private _registerService: RegisterService,
              private _router: Router, private _route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.registerForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doRegister() {
    if(this.registerForm.dirty && this.registerForm.valid){
      this._registerService.doRegister(this.registerForm.value)
          .subscribe(
            data => {
              this._errorService.success("User has been registered successfully. Page will be redirected to login screen in 5 sec")
              setTimeout(() => {
              this._router.navigate(['/login']);
            }, 6000);
            },
            error => {
              this._errorService.error(error);
            }
          )
    }
  }

}
