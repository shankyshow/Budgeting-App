import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AddExpenseInterface, UserBalInterface } from '../../core/ud/type-interface';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  expenseTotal = 0;

  addExpDate = new Date();
  addExpType: string;
  addExpDesc: string;
  addExpDatefc = new FormControl(new Date());
  addExpAmount: number;
  addExpShares = 0;
  addExpPayType: string;
  addExpCardType: string;


  cardTypedisabled = false;

  addExpTypefc = new FormControl('', [Validators.required]); // formControl for ExpenseType in the form
  addExpCardTypefc = new FormControl('', [Validators.required]); // formControl for CardType in the form
  addExpAmountfc = new FormControl('', [Validators.required]); // formControl for Amount in the form

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

  constructor(private router: Router, public auth: AuthService, public afAuth: AngularFireAuth) {}

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
  }

  submitAddNewExp(data) {
    this.thisPage = true;
    const user: UserBalInterface = {
      uid: this.afAuth.auth.currentUser.uid
    };
    const newExpense: AddExpenseInterface = {
      date: this.addExpDate,
      expenseType: this.addExpType,
      description: this.addExpDesc,
      amount: this.addExpAmount,
      shares: this.addExpShares,
      payType: this.addExpPayType,
      cardType: this.addExpCardType
    };
    this.auth.addExpense(user, newExpense);
  }

}
