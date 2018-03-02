import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  emailLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}

