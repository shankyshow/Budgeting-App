import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shanky`s App for Budgeting & Personal Finance';
  selectDefault = 1;

  yearBal = 0;
  monthBal = 0;
  weekBal = 0;
  biweekBal = 0;
  dayBal = 0;

  yearExp = 0;
  monthExp = 0;
  weekExp = 0;
  biweekExp = 0;
  dayExp = 0;

  yearInc = 0;
  monthInc = 0;
  weekInc = 0;
  biweekInc = 0;
  dayInc = 0;

/* Main Balance Summary */
  getYearBal(): number {
    return this.yearBal;
  }

  getMonthBal(): number {
    return this.monthBal;
  }

  getWeekBal(): number {
    return this.weekBal;
  }

  getBiWeekBal(): number {
    return this.biweekBal;
  }

  getDayBal(): number {
    return this.dayBal;
  }

/* Expense Summary */
  getYearExp(): number {
    return this.yearExp;
  }

  getMonthExp(): number {
    return this.monthExp;
  }

  getWeekExp(): number {
    return this.weekExp;
  }

  getBiWeekExp(): number {
    return this.weekExp;
  }

  getDayExp(): number {
    return this.dayExp;
  }

/* Income Summary */
  getYearInc(): number {
    return this.yearInc;
  }

  getMonthInc(): number {
    return this.monthInc;
  }

  getWeekInc(): number {
    return this.weekInc;
  }

  getBiWeekInc(): number {
    return this.weekInc;
  }

  getDayInc(): number {
    return this.dayInc;
  }

}
