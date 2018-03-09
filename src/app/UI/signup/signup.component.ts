import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { NewUserInterface } from '../../core/ud/type-interface';
import * as firebase from 'firebase/app';

import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Shanky`s App for Budgeting & Personal Finance';
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
    Validators.minLength(6),
    Validators.maxLength(25),
    Validators.required]);
  hide = true;
  thisPage = true;

  firstName: string;
  lastName: string;
  emailModel: string;
  passwordModel: string;
  confirmpasswordModel: string;

  constructor(public auth: AuthService, public router: Router) {
  }

  ngOnInit() {}

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('');
  }

  emailSignUp() {
    const newUser: NewUserInterface = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.emailModel,
      password: this.passwordModel
    };
    this.auth.emailSignUp(newUser).catch(() => {
      // In case registration Fails
      console.log('Registration Failed');
      this.firstName = '';
      this.lastName = '';
      this.emailModel = '';
      this.passwordModel = '';
      this.confirmpasswordModel = '';
    });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email Not Entered' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Password Not Entered' :
        this.password.hasError('pattern') ? 'Password must be between 6 and 24 chars and have at least one number' :
        this.password.hasError('minLength') ? 'Password must be between 6 and 24 chars and have at least one number' :
        this.password.hasError('maxLength') ? 'Password must be between 6 and 24 chars and have at least one number' :
            '';
  }
}

