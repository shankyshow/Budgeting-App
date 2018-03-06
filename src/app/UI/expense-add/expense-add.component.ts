import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import * as expenseType from '../../../UD/ExpenseType.json';
import * as dashboard from '../../../UD/dashboard.json';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  addExpType: string;
  addExpDesc: string;
  addExpAmount: number;
  addExpShares: string;
  addExpPayType: string;
  addExpCardType: string;
  addExpDate = new FormControl(new Date());

  cardTypedisabled = false;

  addExpTypefc = new FormControl('', [Validators.required]); // formControl for ExpenseType in the form
  addExpCardTypefc = new FormControl('', [Validators.required]); // formControl for CardType in the form

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

  constructor(private router: Router) { }

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

  submitAddNewExp() {
    this.thisPage = true;
  }

}
