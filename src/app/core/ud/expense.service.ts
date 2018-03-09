import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { UserInterface, ExpenseInterface } from './type-interface';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { NotifyService } from '../notify.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ExpenseService {

  expenseCollection: AngularFirestoreCollection<ExpenseInterface>;
  expense: Observable<ExpenseInterface[]>;


  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private notify: NotifyService,
    public afAuth: AngularFireAuth
  ) {
    this.expenseCollection = afs.collection<ExpenseInterface>('expenses');
    this.expense = this.expenseCollection.valueChanges();
  }

  addExpense(data) {
    const newid = this.afs.createId();
    const newExpense: ExpenseInterface = {
      id: newid,
      uid: this.afAuth.auth.currentUser.uid,
      date: data.date,
      expenseType: data.expenseType,
      description: data.description,
      amount: data.amount,
      shares: data.shares,
      payType: data.payType,
      cardType: data.cardType
    };
    this.expenseCollection.add(newExpense)
    .catch(error => this.handleError(error));
  }

  // Default error handling for all actions
  private handleError(error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }



}
