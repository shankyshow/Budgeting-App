import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../UD/dashboard.json';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.css']
})
export class ExpenseSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Preferred Active Tab Set by User
  userTab(): number {
    return (<any>dashboard).defTab;
  }

  /* EXPENSE SUMMARY Balance */
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
    return (<any>dashboard).biweekExp;
  }

  getDayExp(): number {
    return (<any>dashboard).dayExp;
  }

  /* EXPENSE SUMMARY Target Check */
  getYearStat(): number {
    return (<any>dashboard).yearStat;
  }

  getMonthStat(): number {
    return (<any>dashboard).monthStat;
  }

  getWeekStat(): number {
    return (<any>dashboard).weekStat;
  }

  getBiWeekStat(): number {
    return (<any>dashboard).biweekStat;
  }

  getDayStat(): number {
    return (<any>dashboard).dayStat;
  }

}
