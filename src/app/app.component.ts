import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanky`s App for Budgeting & Personal Finance';

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(public afAuth: AngularFireAuth) {
  }
  showSignup() {
    document.getElementById('signup_hidden').style.display = 'inline';
  }
  emailLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  googleLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  fbLogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  emailLogout() {
    this.afAuth.auth.signOut();
  }
  googleLogout() {
    this.afAuth.auth.signOut();
  }
  fbLogout() {
    this.afAuth.auth.signOut();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
