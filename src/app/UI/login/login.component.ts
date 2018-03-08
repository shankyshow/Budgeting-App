import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Shanky`s App for Budgeting & Personal Finance';

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(public auth: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  googleLogin() {
    this.auth.googleLogin();
  }
  fbLogin() {
    this.auth.fbLogin();
  }
  emailLogin() {
    this.auth.emailLogin();
  }

  logout() {
    this.auth.signOut();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  showSignup() {
    this.router.navigateByUrl('/signup');
  }

}
