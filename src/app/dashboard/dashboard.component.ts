import { Component, OnInit } from '@angular/core';
import * as dashboard from 'dashboard.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userTab(): number {
    return (<any>dashboard).defTab;
  }

/* MAIN BALANCE Summary */
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

/* INCOME SUMMARY Balance */
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
    return (<any>dashboard).biweekInc;
  }

  getDayInc(): number {
    return (<any>dashboard).dayInc;
  }

/* INCOME SUMMARY Collectables */

  getYearCol(): number {
    return (<any>dashboard).yearCol;
  }

  getMonthCol(): number {
    return (<any>dashboard).monthCol;
  }

  getWeekCol(): number {
    return (<any>dashboard).weekCol;
  }

  getBiWeekCol(): number {
    return (<any>dashboard).biweekCol;
  }

  getDayCol(): number {
    return (<any>dashboard).dayCol;
  }

  constructor() { }

  ngOnInit() {
  }

}
