import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
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
}
