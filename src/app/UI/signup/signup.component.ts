import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import * as firebase from 'firebase/app';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  firstName: string;
  lastName: string;
  emailModel: string;
  passwordModel: string;
  confirmpasswordModel: string;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  emailSignUp() {
    this.auth.emailSignUp(this.firstName, this.lastName, this.emailModel, this.passwordModel).catch(() => {
      console.log('Registration Failed');
      this.firstName = '';
      this.lastName = '';
      this.emailModel = '';
      this.passwordModel = '';
      this.confirmpasswordModel = '';
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}

