import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as expenseType from '../../../UD/ExpenseType.json';
import * as dashboard from '../../../UD/dashboard.json';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  addExpDesc: string;
  addExpAmount: number;
  addExpShares: string;
  addExpPayMethod: string;
  addExpCardType: string;
  addExpDate = new FormControl(new Date());

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
