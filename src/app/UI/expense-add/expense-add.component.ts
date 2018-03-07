import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as dashboard from '../../../UD/dashboard.json';
import { Observable } from '@firebase/util';

interface Expense {
  id: string;
  uid: string;
  date: string;
  expenseType: string;
  description: string;
  amount: number;
  shares: number;
  payType: string;
  cardType: string;
}

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  addExpDate: string;
  addExpType: string;
  addExpDesc: string;
  addExpAmount: number;
  addExpShares: number;
  addExpPayType: string;
  addExpCardType: string;

  addExpDatefc = new FormControl(new Date());

  cardTypedisabled = false;

  addExpTypefc = new FormControl('', [Validators.required]); // formControl for ExpenseType in the form
  addExpCardTypefc = new FormControl('', [Validators.required]); // formControl for CardType in the form

  expenseCollection: AngularFirestoreCollection<Expense>;
  expense: Observable<Expense[]>;

  cashSelected() {
    this.addExpCardType = 'Cash';
    this.cardTypedisabled = true;
  }
  debitCardSelected() {
    this.addExpCardType = '';
    this.cardTypedisabled = false;
  }
  creditCardSelected() {
    this.addExpCardType = '';
    this.cardTypedisabled = false;
  }

// User selected Currency
  userCurrency(): string {
    return (<any>dashboard).selectedCurrency;
  }

  constructor(private router: Router, private afs: AngularFirestore) {
    this.expenseCollection = this.afs.collection<Expense>('expenses');
  }

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

  submitAddNewExp(data) {
    this.thisPage = true;
    const autoid = this.afs.createId();
    const expData: Expense = {
      id: autoid,
      uid: 'userid',
      date: this.addExpDate,
      expenseType: this.addExpType,
      description: this.addExpDesc,
      amount: this.addExpAmount,
      shares: this.addExpShares,
      payType: this.addExpPayType,
      cardType: this.addExpCardType
    };
    this.expenseCollection.add(expData);
  }

}
