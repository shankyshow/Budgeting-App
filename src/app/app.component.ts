import { Component } from '@angular/core';
import * as dashboard from '../dashboard.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanky`s App for Budgeting & Personal Finance';
  selectDefault = 1;

/* Main Balance Summary */
  getYearBal(): number {
    return (<any>dashboard).yearBal;
  }

  getMonthBal(): number {
    return (<any>dashboard).monthBal;
  }

  getWeekBal(): number {
    return (<any>dashboard).weekBal;
  }

  getBiWeekBal(): number {
    return (<any>dashboard).biweekBal;
  }

  getDayBal(): number {
    return (<any>dashboard).dayBal;
  }

/* Expense Summary */
  getYearExp(): number {
    return (<any>dashboard).yearExp;
  }

  getMonthExp(): number {
    return (<any>dashboard).monthExp;
  }

  getWeekExp(): number {
    return (<any>dashboard).weekExp;
  }

  getBiWeekExp(): number {
    return (<any>dashboard).weekExp;
  }

  getDayExp(): number {
    return (<any>dashboard).dayExp;
  }

/* Income Summary */
  getYearInc(): number {
    return (<any>dashboard).yearInc;
  }

  getMonthInc(): number {
    return (<any>dashboard).monthInc;
  }

  getWeekInc(): number {
    return (<any>dashboard).weekInc;
  }

  getBiWeekInc(): number {
    return (<any>dashboard).weekInc;
  }

  getDayInc(): number {
    return (<any>dashboard).dayInc;
  }

}
