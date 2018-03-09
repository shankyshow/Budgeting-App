import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import * as dashboard from '../../../ud/dashboard.json';
import { AddExpenseInterface } from '../../core/ud/type-interface';
import { ExpenseService } from '../../core/ud/expense.service';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  expenseTotal = 0;

  addExpDate: string;
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

// User selected Currency
  userCurrency(): string {
    return (<any>dashboard).selectedCurrency;
  }

  constructor(private router: Router, public exp: ExpenseService) {}

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit() {
  }

  submitAddNewExp(data) {
    this.thisPage = true;
    const newExpense: AddExpenseInterface = {
      date: this.addExpDate,
      expenseType: this.addExpType,
      description: this.addExpDesc,
      amount: this.addExpAmount,
      shares: this.addExpShares,
      payType: this.addExpPayType,
      cardType: this.addExpCardType
    };
    this.exp.addExpense(newExpense);
  }

}
