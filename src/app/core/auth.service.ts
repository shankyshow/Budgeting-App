import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from './notify.service';
import { UserInterface } from './ud/type-interface';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  user: Observable<UserInterface>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            return this.afs.doc<UserInterface>(`users/${user.uid}`).valueChanges();
          } else {
            return Observable.of(null);
          }
        });
  }

  emailSignUp(data) {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(user => {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        return this.setUserDoc(user); // create initial user document
      })
      .catch(error => this.handleError(error) );
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  fbLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Update properties on the user document
  updateUser(user: UserInterface, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        credential.user.firstName = credential.user.displayName.substr(0, credential.user.displayName.indexOf(' ')); // look for js split
        credential.user.lastName = credential.user.displayName.substr(credential.user.displayName.indexOf(' ') + 1 );
        this.updateUserData(credential.user);
      });
  }

  private setUserDoc(user) {
    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      uid: user.uid,
      email: user.email || null,
      firstName: user.firstName,
      lastName: user.lastName
    };

    return userRef.set(data);

  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(`users/${user.uid}`);

    const data: UserInterface = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
}
