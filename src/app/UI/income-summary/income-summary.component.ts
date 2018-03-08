import { Component, OnInit } from '@angular/core';
import * as dashboard from '../../../ud/dashboard.json';

@Component({
  selector: 'app-income-summary',
  templateUrl: './income-summary.component.html',
  styleUrls: ['./income-summary.component.css']
})
export class IncomeSummaryComponent implements OnInit {

  userTab(): number {
    return (<any>dashboard).defTab;
  }

  constructor() { }

  ngOnInit() {
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

}
