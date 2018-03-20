import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from './notify.service';
import { UserInterface, ExpenseInterface, UserBalInterface, AddExpenseInterface, TimeBalance } from './ud/type-interface';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  user: Observable<UserInterface>;

  expenseCollection: AngularFirestoreCollection<ExpenseInterface>;
  expense: Observable<ExpenseInterface[]>;

  dayBal: number;
  weekBal: number;
  biweekBal: number;
  monthBal: number;
  yearBal: number;
  today = new Date();

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

      this.user.subscribe((userBal) => {
    // Daily Balance Check //
        if (userBal.daily.dayBal == null || userBal.daily.day !== this.today.getDay()) {
          this.dayBal = 0;
          const balances: UserBalInterface = {
            uid: userBal.uid,
            daily: {day: this.today.getDay(), dayBal: this.dayBal}
          };
          this.afs.doc(`users/${userBal.uid}`).update(balances);
        } else {
          this.dayBal = userBal.daily.dayBal;
        }
/*
    // Weekly Balance Check //
        if (userBal.weekly.weekBal == null || userBal.weekly.week !== this.today.getWeek() {
          this.weekBal = 0;
          const balances: UserBalInterface = {
            uid: userBal.uid,
            weekly: {week: this.today.getWeek(), weekBal: this.weekBal}
          };
          this.afs.doc(`users/${userBal.uid}`).update(balances);
        } else {
          this.weekBal = userBal.weekly.weekBal;
        }

    // Bi-Weekly Balance Check //
        if (userBal.biweekly.biweekBal == null || userBal.biweekly.biweek !== this.today.getBiweek()) {
          this.biweekBal = 0;
          const balances: UserBalInterface = {
            uid: userBal.uid,
            biweekly: {biweek: this.today.getBiweek(), biweekBal: this.biweekBal}
          };
          this.afs.doc(`users/${userBal.uid}`).update(balances);
        } else {
          this.biweekBal = userBal.biweekly.biweekBal;
        } */

    // Monthly Balance Check //
        if (userBal.monthly.monthBal == null || userBal.monthly.month !== this.today.getMonth()) {
          this.monthBal = 0;
          const balances: UserBalInterface = {
            uid: userBal.uid,
            monthly: {month: this.today.getMonth(), monthBal: this.monthBal}
          };
          this.afs.doc(`users/${userBal.uid}`).update(balances);
        } else {
          this.monthBal = userBal.monthly.monthBal;
        }
/*
    // Yearly Balance Check //
        if (userBal.yearly.yearBal == null || userBal.yearly.year !== this.today.getYear() {
          this.yearBal = 0;
          const balances: UserBalInterface = {
            uid: userBal.uid,
            yearly: {year: this.today.getYear(), yearBal: this.yearBal}
          };
          this.afs.doc(`users/${userBal.uid}`).update(balances);
        } else {
          this.yearBal = userBal.yearly.yearBal;
        }

*/
      });
  }

  emailSignUp(data) {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(user => {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.dayBal = 0;
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
      lastName: user.lastName,
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

  addExpense(user: UserBalInterface, data: AddExpenseInterface) {

// Aggregate Day Balance on every add expense //
    if (data.date.getDay() === this.today.getDay()) {
      const newDayBal = this.dayBal + data.amount;

      const balances: UserBalInterface = {
        uid: user.uid,
        daily: {day: data.date.getDay(), dayBal: newDayBal}
      };
      this.afs.doc(`users/${user.uid}`).update(balances);
    }

    const expId = this.afs.createId();
    const newExpense: ExpenseInterface = {
      id: expId,
      date: data.date,
      expenseType: data.expenseType,
      description: data.description,
      amount: data.amount,
      shares: data.shares,
      payType: data.payType,
      cardType: data.cardType
    };
    return this.afs.doc(`users/${user.uid}/expenses/${expId}`).set(newExpense);
  }
}
